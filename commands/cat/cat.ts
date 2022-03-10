import { writeAll } from "../../deps_std.ts";

if (Deno.args.length === 0) {
  while (true) {
    console.log(` ${prompt("")}`);
  }
}

for (const file of Deno.args) {
  writeAll(Deno.stdout, await Deno.readFile(file));
}
