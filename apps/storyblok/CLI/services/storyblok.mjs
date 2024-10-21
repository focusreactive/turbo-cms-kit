import { loadEnvVariables } from "../utils/envs.mjs";

export async function createStoryblokSpace(name) {
  const envs = loadEnvVariables();
  const token = envs.SB_PERSONAL_ACCESS_TOKEN;

  const response = await fetch("https://api.storyblok.com/v1/spaces/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ space: { name } }),
  });

  if (!response.ok) {
    console.log(response.status, response.statusText, await response.json());
    throw new Error(`❌ HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();

  return {
    spaceId: data.space.id,
    previewToken: data.space.first_token,
    data: data,
  };
}

export async function updateStoryblokSpace(spaceId, spaceData) {
  const envs = loadEnvVariables();
  const token = envs.SB_PERSONAL_ACCESS_TOKEN;

  const response = await fetch(
    `https://api.storyblok.com/v1/spaces/${spaceId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ space: spaceData }),
    },
  );

  if (!response.ok) {
    console.log(response.status, response.statusText, await response.json());
    throw new Error(`❌ HTTP error! Status: ${response.status}`);
  }
}

export async function createStoryblokWebhook(spaceId, endpoint) {
  const envs = loadEnvVariables();
  const token = envs.SB_PERSONAL_ACCESS_TOKEN;

  const response = await fetch(
    `https://api.storyblok.com/v1/spaces/${spaceId}/webhook_endpoints/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        webhook_endpoint: {
          name: "Revalidate",
          endpoint,
          actions: [
            "story.published",
            "story.unpublished",
            "story.deleted",
            "story.moved",
            "datasource.entries_updated",
          ],
          activated: true,
        },
      }),
    },
  );

  if (!response.ok) {
    console.log(response.status, response.statusText, await response.json());
    throw new Error(`❌ HTTP error! Status: ${response.status}`);
  }
}
