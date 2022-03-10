import { parse } from "https://deno.land/std/flags/mod.ts";
import { ensureFileSync } from "https://deno.land/std/fs/mod.ts";

const usage = "Usage: touch [OPTION]... FILE...";

function parseFiles(files: string[]): (string | number)[] {
  if (files.length == 0) {
    throw new Error("No files specified");
  }

  return files;
}

function main() {
  const args = parse(Deno.args);
  const files = args._ as string[];

  let parsedFiles;

  try {
    parsedFiles = parseFiles(files);
  } catch {
    console.log(usage);
    return
  }

  for (const file of parsedFiles) {
    ensureFileSync(file.toString());
  }
}

main();
