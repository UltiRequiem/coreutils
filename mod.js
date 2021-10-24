// @ts-check

/**
 * Util to print message and exit the process.
 * @param {string} message Message to print.
 * @param {boolean} voluntary Exit the program vocabulary?
 * @returns {never} Exit the process.
 */
export function printHelp(message, voluntary = false) {
  console.log(message);
  Deno.exit(voluntary ? 0 : 1);
}
