import fs from "fs";
import dotenv from "dotenv";

const envPath = "../.env.local";

export const loadEnvVariables = () => {
  if (fs.existsSync(envPath)) {
    return dotenv.parse(fs.readFileSync(envPath));
  }

  return {};
};

export const appendOrUpdateEnv = (key, value) => {
  let envContent = "";

  if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, "utf8");
  }

  const envLines = envContent.split("\n");
  const existingLineIndex = envLines.findIndex((line) =>
    line.startsWith(`${key}=`),
  );

  if (existingLineIndex !== -1) {
    envLines[existingLineIndex] = `${key}=${value}`;
  } else {
    envLines.push(`${key}=${value}`);
  }

  fs.writeFileSync(envPath, envLines.join("\n"));
};

export const checkEnvVariables = (requiredVars) => {
  const missingVars = requiredVars.filter((varName) => !process.env[varName]);
  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(", ")}`,
    );
  }
};
