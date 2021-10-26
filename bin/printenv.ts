for (const envar in Deno.env.toObject()) {
  if (envar !== "_") {
    console.log(`${envar}=${Deno.env.get(envar)}`);
  }
}
