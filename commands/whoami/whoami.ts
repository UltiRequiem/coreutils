export function user() {
  return Deno.env.get("USER");
}

if (import.meta.main) {
  console.log(user());
}
