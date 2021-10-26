import { blue, green } from "../deps.ts";

async function stdinPrompt(message: string) {
  const buf = new Uint8Array(1024);

  await Deno.stdout.write(new TextEncoder().encode(message));

  const n = <number> await Deno.stdin.read(buf);

  return new TextDecoder().decode(buf.subarray(0, n)).trim();
}

while (true) {
  const command = await stdinPrompt(`${green("$")} ${blue(Deno.cwd())} `);
  try {
    Deno.run({ cmd: command.split(" ") });
  } catch {
    console.log(`${command} not found!`);
  }
  console.log();
}
