const fileNames = [];

for await (const dirEntry of Deno.readDir(".")) {
  fileNames.push(dirEntry.name);
}

console.log(fileNames.join(" "));
