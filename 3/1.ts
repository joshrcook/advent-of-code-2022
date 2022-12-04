const env = Deno.env.get("ENV");
const filename = env === "prod" ? "input.txt" : "test-input.txt";
const str = await Deno.readTextFile(filename);
const getItemPriority = (char: string): number => {
  // It's already lowercase
  if (char.toLowerCase() === char) {
    return char.charCodeAt(0) - 96;
  }
  // It's uppercase
  return char.toLowerCase().charCodeAt(0) - 70;
};

const sumReducer = (prev: number, curr: number) => prev + curr;

const rucksacks = str
  .split(/\n/)
  .map((rucksack) => [
    rucksack.slice(0, rucksack.length / 2),
    rucksack.slice(rucksack.length / 2),
  ]);

const compare = (first: string, second: string): string[] => {
  const inBoth: string[] = [];
  for (let i = 0; i < first.length; i++) {
    const char = first[i];
    // If already in array, just continue
    if (inBoth.includes(char)) {
      continue;
    }
    // If found, push
    if (second.includes(char)) {
      inBoth.push(char);
    }
  }
  return inBoth;
};

const answer = rucksacks
  .map((rucksack) => {
    return compare(rucksack[0], rucksack[1]);
  })
  .map((arr) => arr.map((item) => getItemPriority(item)))
  .map((arr) => arr.reduce(sumReducer, 0))
  .reduce(sumReducer, 0);

console.log("answer", answer);
