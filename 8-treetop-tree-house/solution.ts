import part1 from "./part-1.ts";
import part2 from "./part-2.ts";
const env = Deno.env.get('ENV');
const part = Deno.env.get('PART');
const input = await Deno.readTextFile(env === 'prod' ? "input.txt" : 'test-input.txt');

(() => {
    if (part === '1') {
        console.log("The answer to part 1 is", part1(input));
        return;
    }
    
    if (part === '2') {
        console.log('The answer to part 2 is', part2(input))
        return;
    }
    console.log('Please select a part');
})();


// console.log("The answer to part 2 is", part2(input));
