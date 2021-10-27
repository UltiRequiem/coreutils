if (Deno.args.length > 0) {
  for (const envar of Deno.args) {
    console.log(`${envar}=${Deno.env.get(envar)}`);
  }
} else {
  for (const envar in Deno.env.toObject()) {
    if (envar !== "_") {
      console.log(`${envar}=${Deno.env.get(envar)}`);
    }
  }
}
