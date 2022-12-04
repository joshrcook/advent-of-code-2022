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

const elves = str
  .split(/\n/);
const groups = [];
for (let i = 0; i < elves.length; i += 3) {
  groups.push([
    elves[i],
    elves[i + 1], 
    elves[i + 2]
  ])
}

const compare = (...groups: string[]): string[] => {
  const [first, ...others] = groups;
  const inAll: string[] = [];
  for (let i = 0; i < first.length; i++) {
    const char = first[i];
    // If already in array, just continue
    if (inAll.includes(char)) {
      continue;
    }
    // If found, push
    if (others.every(other => other.includes(char))) {
      inAll.push(char);
    }
  }
  return inAll;
};

const answer = groups
  .map((group) => {
    return compare(...group);
  })
  .map((arr) => arr.map((item) => getItemPriority(item)))
  .map((arr) => arr.reduce(sumReducer, 0))
  .reduce(sumReducer, 0);

console.log("answer", answer);
