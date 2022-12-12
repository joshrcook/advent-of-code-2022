import part1 from "./part-1.ts";


// import part2 from "./part-2.ts";

const input = await Deno.readTextFile("input.txt");

console.log(part1(input));