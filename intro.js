import chalk from "chalk";
import { userInfo } from "os";

function aiIntro(params) {
  console.log(
    chalk.hex("#000000").bgMagentaBright.bold(
      `--   Hi ${userInfo().username}, I'm Sara, your AI Assistent. How can I help you?`.toUpperCase()
    )
  );
}

export { aiIntro };
