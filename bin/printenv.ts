if (Deno.args.length > 0) {
  /** User supplied environment variables to print out,
   * Eg. ["USER", "SECONDS", "LOGNAME"]. */
  for (const envar of Deno.args) {
    console.log(`${envar}=${Deno.env.get(envar)}`);
  }
} else {
  /* User did not supply any environment variable, so print them all... */
  for (const envar in Deno.env.toObject()) {
    /* ...Except for "_", which points to the path of the Deno runtime. */
    if (envar !== "_") {
      console.log(`${envar}=${Deno.env.get(envar)}`);
    }
  }
}
