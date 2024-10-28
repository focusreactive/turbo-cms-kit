import { execSync } from "child_process";
import ora from "ora";

import {
  createStoryblokSpace,
  createStoryblokWebhook,
  updatePageComponentSectionsField,
  updateStoryblokSpace,
  uploadBackupStories,
} from "./services/storyblok.mjs";
import {
  createProjectDeployment,
  createVercelProject,
} from "./services/vercel.mjs";
import { openUrlAndConfirm } from "./utils/open.mjs";
import {
  promptForProjectName,
  promptForToken,
  promptForVercelTeam,
} from "./utils/prompts.mjs";
import { colorText } from "./utils/styles.mjs";

const main = async () => {
  console.log(
    colorText("\nWelcome to the Storyblok Auto Rollout CLI Tool\n", "cyan"),
  );

  console.log(
    colorText(
      "Provide your personal access tokens. Data will be saved in the .env.local file.",
      "yellow",
    ),
  );

  let sbPersonalAccessToken;
  try {
    sbPersonalAccessToken = await promptForToken("SB_PERSONAL_ACCESS_TOKEN");
    await promptForToken("VERCEL_PERSONAL_AUTH_TOKEN");
    await promptForVercelTeam();
  } catch (error) {
    console.error(colorText("Error providing tokens:", "red"), error.message);
    process.exit(1);
  }

  const projectName = await promptForProjectName();

  const spinner = ora("Creating Storyblok space...").start();
  let spaceId;
  let previewToken;

  try {
    const {
      spaceId: newSpaceId,
      previewToken: newPreviewToken,
      // data,
    } = await createStoryblokSpace(projectName);

    spaceId = newSpaceId;
    previewToken = newPreviewToken;
    spinner.succeed(`Storyblok space created with ID: ${spaceId}`);
  } catch (error) {
    spinner.fail(`Failed to create Storyblok space: ${error.message}`);
    process.exit(1);
  }

  try {
    await openUrlAndConfirm(
      `https://app.storyblok.com/me/spaces/${spaceId}/dashboard#/me/spaces/${spaceId}/dashboard`,
      spinner,
    );
    spinner.succeed("Storyblok space plan selected successfully");
  } catch (error) {
    spinner.fail(
      `Failed to open Storyblok space page and select plan: ${error.message}`,
    );
    process.exit(1);
  }

  spinner.start("Creating Vercel production project...");

  const {
    deploymentUrl: productionDeploymentUrl,
    projectName: productionProjectName,
    projectId: productionProjectId,
  } = await createVercelProject({
    projectName,
    sbParams: {
      isPreview: false,
      spaceId,
      previewToken,
    },
  });
  spinner.succeed("Vercel production project created successfully");

  spinner.start("Creating Vercel preview project...");
  const {
    deploymentUrl: previewDeploymentUrl,
    projectName: previewProjectName,
    projectId: previewProjectId,
  } = await createVercelProject({
    projectName,
    sbParams: {
      isPreview: true,
      spaceId,
      previewToken,
    },
  });
  spinner.succeed("Vercel preview project created successfully");

  try {
    spinner.start("Updating Storyblok space...");

    await updateStoryblokSpace(spaceId, {
      domain: `${previewDeploymentUrl}/`,
    });
    await createStoryblokWebhook(
      spaceId,
      `${productionDeploymentUrl}/api/revalidate`,
    );

    spinner.succeed("Storyblok space successfully updated ✅");
  } catch (error) {
    spinner.fail(`Failed to update Storyblok space: ${error.message}`);
  }

  spinner.start("Filling new space with data...");

  try {
    execSync("pnpm storyblok user", {
      stdio: "ignore",
    });
  } catch (error) {}

  try {
    execSync(`pnpm storyblok login --token ${sbPersonalAccessToken}`, {
      stdio: "inherit",
    });

    execSync(`pnpm push-schemas ${spaceId}`, {
      stdio: "inherit",
    });

    await updatePageComponentSectionsField(spaceId);
    await uploadBackupStories(spaceId);

    spinner.succeed("New space filled with data successfully 🎉");
  } catch (error) {
    spinner.fail(`Failed to fill new space: ${error.message}`);
    process.exit(1);
  }

  spinner.start("Creating Vercel deployment...");
  try {
    await createProjectDeployment({
      name: productionProjectName,
      id: productionProjectId,
    });
    await createProjectDeployment({
      name: previewProjectName,
      id: previewProjectId,
    });
    spinner.succeed("Vercel deployment created successfully");
  } catch (error) {
    spinner.fail(`Failed to create Vercel deployment: ${error.message}`);
    process.exit(1);
  }

  console.log(
    colorText("\nStoryblok project setup completed successfully! 🎉", "green"),
  );
  console.log(colorText("Space ID:", "cyan"), colorText(spaceId, "yellow"));
  console.log(
    colorText("Preview Domain:", "cyan"),
    colorText(productionDeploymentUrl, "yellow"),
  );
};

main().catch((error) => {
  console.error(colorText("Error:", "red"), error.message);
  process.exit(1);
});
