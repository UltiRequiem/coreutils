const args = Deno.args.flat()
if (args.length < 1) {
  console.error("Usage: time command [arguments...]")
  Deno.exit(1)
}

const p = Deno.run({
  cmd: args,
  stdout: "piped",
  stderr: "piped",
});
const [status, stdout, stderr] = await Promise.all([
  p.status(),
  p.output(),
  p.stderrOutput(),
])
p.close();

if (status.code === 0) {
  await Deno.stdout.write(stdout)
} else {
  const err = new TextDecoder().decode(stderr)
  console.log(err)
  Deno.exit(2)
}

console.log(String(`\nreal    ${performance.now()}`));
Deno.exit(status);
