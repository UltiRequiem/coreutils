const args = Deno.args.flat();
if (args.length < 1) {
  console.error("Usage: time command [arguments...]");
  Deno.exit(1);
}

let p = null;
try {
  p = Deno.run({
    cmd: args,
    stdout: "piped",
    stderr: "piped",
  });
} catch (err) {
  if (err instanceof Deno.errors.NotFound) {
    console.error(`${args[0]}: command not found\n\nreal    ${performance.now()}`);
    Deno.exit(1);
  } else {
    throw err;
  }
}

const [status, stdout, stderr] = await Promise.all([
  p.status(),
  p.output(),
  p.stderrOutput(),
]);
p.close();

if (status.code === 0) {
  await Deno.stdout.write(stdout);
} else {
  const err = new TextDecoder().decode(stderr);
  console.log(err);
  Deno.exit(1);
}

console.log(String(`\nreal    ${performance.now()}`));
Deno.exit(status);
