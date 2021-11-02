/** TODO
 * Add feature to change file timestamps */
import { parse } from "https://deno.land/std/flags/mod.ts";
import { ensureFileSync } from "https://deno.land/std/fs/mod.ts";

const usage = "Usage: touch [OPTION]... FILE...";

function parseFiles(): Array<string | number> {
  const args = parse(Deno.args);
  /** Check for user-supplied arguments, stored at Deno.args._, eg.
   * { _: [ "foo.txt", "bar.txt" ] }
   *
   * NOTE: ensureFileSync is able to handle text expansion of multiple files, eg.
   * { _: [ "/tmp/{foo,bar,baz}.txt" ] } */
  const files = args._;

  if (files.length == 0) {
    console.log(usage);
    Deno.exit(1);
  }

  return files;
}

function main(): void {
  const files = parseFiles();

  for (const file of files) {
    ensureFileSync(file.toString());
  }
}

main();
