export function user() {
  return Deno.env.get("USER");
}

console.log(user());
