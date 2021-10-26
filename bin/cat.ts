import { writeAll } from "../deps.ts";

for (const file of Deno.args) {
  writeAll(Deno.stdout, await Deno.readFile(file));
}
