const env = Deno.env.get("ENV");
const filename = env === "prod" ? "input.txt" : "test-input.txt";
const str = await Deno.readTextFile(filename);
const answer = str
  .split(/\n\n/g)
  .map((str) => str.split(/\n/).map((n) => parseInt(n)))
  .map((arr) => arr.reduce((prev, curr) => prev + curr, 0))
  .reduce((prev, curr) => Math.max(prev, curr), 0);
console.log("answer", answer);
