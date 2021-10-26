if (Deno.args.length === 1 && typeof Deno.args[0] === "string") {
  console.log(Deno.args[0]);
  Deno.exit(0);
}
console.log(Deno.args.join(" "));
