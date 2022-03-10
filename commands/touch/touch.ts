import { parse } from "https://deno.land/std/flags/mod.ts";

import { ensureFile } from "../../deps_std.ts";

const usage = "Usage: touch [OPTION]... FILE...";

async function main() {
  const args = parse(Deno.args);
  const files = args._ as string[];

  if (files.length == 0) {
    console.log(usage);
    return;
  }

  for (const file of files) {
    await ensureFile(`${file}`);
  }
}

main();
