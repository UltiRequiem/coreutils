
export function printHelp(message: string, voluntary?: boolean): never {
  console.log(message);
  Deno.exit(voluntary ? 0 : 1);
}
