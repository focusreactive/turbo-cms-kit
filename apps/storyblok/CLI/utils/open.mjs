import inquirer from "inquirer";
import open from "open";

export async function openUrlAndWait(url) {
  // Open the URL in the default browser
  await open(url);

  // Prompt the user to continue
  const { continue: shouldContinue } = await inquirer.prompt({
    type: "confirm",
    name: "continue",
    message: "\nHave you completed the action in the browser?",
    default: false,
  });

  if (!shouldContinue) {
    spinner.fail(
      "Please complete the action in the browser before continuing.",
    );

    return openUrlAndWait(url);
  }
}
