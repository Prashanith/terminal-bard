import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import ora from "ora";
import chalk from "chalk";

import { setTimeout } from "timers/promises";
import axios from "axios";

const rl = readline.createInterface({ input, output });
const spinner = ora("   Sara is Thinking 🧠");
async function bard(params) {
  const answer = await rl.question(chalk.gray("❖    YOU:\n     "));
  spinner.start();
  const res = await bardService(answer);
  spinner.stop();

  console.log(chalk.greenBright(`❖    SARA:`));
  console.log(`     ${res}`);
  console.log("");
  console.log("");
  bard();
}

async function bardService(message) {
    const res  = axios.post("http://localhost:3000/bard/code",{message:message});
    console.log(res,2020);

  await setTimeout(2000);
  return "Hey Dumb, Can't you work on your own?";
  // axios.post()
}

export default bard;
