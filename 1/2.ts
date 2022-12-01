const env = Deno.env.get("ENV");
const filename = env === "prod" ? "input.txt" : "test-input.txt";
const str = await Deno.readTextFile(filename);

const sum = (prev: number, curr: number): number => prev + curr;
const sortHiToLo = (a: number, b: number): number => {
  if (a === b) return 0;
  return a < b ? 1 : -1
};

const arr = str
  .split(/\n\n/g)
  .map((str) => str.split(/\n/).map((n) => parseInt(n)))
  .map((arr) => arr.reduce(sum, 0))
arr.sort(sortHiToLo);
const answer = arr.slice(0, 3).reduce(sum, 0);
console.log("answer", answer);