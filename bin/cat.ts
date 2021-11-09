import { writeAll } from "../deps.ts";

if (Deno.args.length === 0) {
  while (true) {
    console.log(` ${prompt("")}`);
  }
}

for (const file of Deno.args) {
  writeAll(Deno.stdout, await Deno.readFile(file));
}
