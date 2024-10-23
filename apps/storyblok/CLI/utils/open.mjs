import inquirer from "inquirer";
import open from "open";

export async function openUrlAndConfirm(url, spinner) {
  await open(url);

  const { continue: shouldContinue } = await inquirer.prompt({
    type: "confirm",
    name: "continue",
    message: "Have you completed the action in the browser?",
    default: false,
  });

  if (!shouldContinue) {
    spinner.fail(
      "Please complete the action in the browser before continuing.",
    );

    return openUrlAndConfirm(url);
  }
}
