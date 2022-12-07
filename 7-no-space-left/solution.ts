import part1 from "./part-1.ts";


// import part2 from "./part-2.ts";

const input = await Deno.readTextFile("input.txt");

console.log("The answer to part 1 is", part1(input));

