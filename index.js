import figlet from "figlet";
import { aiIntro } from "./intro.js";
import bard from "./bard.js";
import ora from "ora";
import logSymbols from "log-symbols";

figlet("Terminal AI", function (err, data) {
  if (err) {
    console.log("Unknown Error Occurred ...");
    console.dir(err);
    return;
  }

  const spinner = ora("Getting Ready");

  spinner.start();
  setTimeout(() => {
    spinner.stop();
  }, 2000);
  console.log(data);
  aiIntro();
  console.log();
  console.log();
  console.log(logSymbols.success, "   STARTING NEW CONVERSTION");
  console.log("|");
  console.log("|");

  bard();
});
