/**
 * Util to print message and exit the process.
 * @param message - Message to print.
 * @param  voluntary - Exit the program vocabulary?
 * @returns  Exit the process.
 */
export function printHelp(message: string, voluntary?: boolean): never {
  console.log(message);
  Deno.exit(voluntary ? 0 : 1);
}
