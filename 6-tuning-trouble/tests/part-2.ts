import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import part2 from "../part-2.ts";

Deno.test("Example 1", () => {
    const answer = part2("mjqjpqmgbljsphdztnvjfqwrcgsmlb");
    assertEquals(answer, 19);
});

Deno.test("Example 2", () => {
    const answer = part2("bvwbjplbgvbhsrlpgdmjqwftvncz");
    assertEquals(answer, 23);
});

Deno.test("Example 3", () => {
    const answer = part2("nppdvjthqldpwncqszvftbrmjlhg");
    assertEquals(answer, 23);
});

Deno.test("Example 4", () => {
    const answer = part2("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg");
    assertEquals(answer, 29);
});

Deno.test("Example 5", () => {
    const answer = part2("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw");
    assertEquals(answer, 26);
});
