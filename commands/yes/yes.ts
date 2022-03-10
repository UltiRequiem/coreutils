import { printHelp } from "../../utils/mod.ts";
import { writeAll } from "../../deps_std.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";

const helpMessage = `Usage: yes [STRING]...
  or:  yes OPTION
Repeatedly output a line with all specified STRING(s), or 'y'.

      --help     display this help and exit
      --version  output version information and exit`;

async function main() {
  const { help, version } = parse(Deno.args);

  if (help && version || help) {
    printHelp(helpMessage);
  }

  if (version) {
    return console.log("v0.1.0");
  }

  let toPrintUntilKilled = "y";

  if (Deno.args.length >= 1) {
    toPrintUntilKilled = Deno.args.join(" ");
  }

  const text = new TextEncoder().encode(toPrintUntilKilled + "\n");

  while (true) {
    await writeAll(Deno.stdout, text);
  }
}

if (import.meta.main) {
  await main();
}
