import inquirer from "inquirer";

import { getVercelTeams } from "../services/vercel.mjs";
import { appendOrUpdateEnv, loadEnvVariables } from "./envs.mjs";

const tokenNames = {
  SB_PERSONAL_ACCESS_TOKEN: "Storyblok personal access token",
  VERCEL_PERSONAL_AUTH_TOKEN: "Vercel personal access token",
};

export async function promptForToken(tokenName, promptMessage) {
  const env = loadEnvVariables();

  if (env[tokenName]) {
    const { useCurrent } = await inquirer.prompt({
      type: "confirm",
      name: "useCurrent",
      message: `${tokenNames[tokenName]} is already set. Do you want to keep the current value?`,
      default: true,
    });

    if (useCurrent) {
      return env[tokenName];
    }
  }
  const { token } = await inquirer.prompt({
    type: "input",
    name: "token",
    message: promptMessage,
  });

  appendOrUpdateEnv(tokenName, token);

  return token;
}

export async function promptForVercelTeam(vercelToken, promptMessage) {
  const env = loadEnvVariables();

  if (env["VERCEL_TEAM_ID"]) {
    const { useCurrent } = await inquirer.prompt({
      type: "confirm",
      name: "useCurrent",
      message: `Vercel team is already set. Do you want to keep the current value?`,
      default: true,
    });

    if (useCurrent) {
      return env["VERCEL_TEAM_ID"];
    }
  }

  const vercelTeams = await getVercelTeams(vercelToken);

  const { team } = await inquirer.prompt({
    type: "list",
    name: "team",
    message: promptMessage,
    choices: vercelTeams.map((team) => ({
      name: `${team.name} (${team.slug})`,
      value: team,
    })),
  });

  appendOrUpdateEnv("VERCEL_TEAM_ID", team.id);

  return team.id;
}

export async function promptForProjectName() {
  const { projectName } = await inquirer.prompt({
    type: "input",
    name: "projectName",
    message: "Enter project name:",
    description:
      "Project names can be up to 100 characters long and must be lowercase. They can include letters, digits, and the following characters: '.', '_', '-'. However, they cannot contain the sequence '---'.",
    validate: (input) => {
      if (input.length > 100) {
        return "Project name must be 100 characters or less.";
      }
      if (!/^[a-z0-9._-]+$/.test(input)) {
        return "Project name can only contain lowercase letters, digits, '.', '_', or '-'.";
      }
      if (input.includes("---")) {
        return "Project name cannot contain the sequence '---'.";
      }
      return true;
    },
    default: "nextjs-storyblok-fast",
  });

  return projectName;
}
