if (Deno.args.length === 1 && typeof Deno.args[0] === "string")
  console.log(Deno.args[0]);
else
  console.log(Deno.args.join(" "));
