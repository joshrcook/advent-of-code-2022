import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import part1 from "../part-1.ts";

Deno.test("Example 1", () => {
    const answer = part1("mjqjpqmgbljsphdztnvjfqwrcgsmlb");
    assertEquals(answer, 7);
});

Deno.test("Example 2", () => {
    const answer = part1("bvwbjplbgvbhsrlpgdmjqwftvncz");
    assertEquals(answer, 5);
});

Deno.test("Example 3", () => {
    const answer = part1("nppdvjthqldpwncqszvftbrmjlhg");
    assertEquals(answer, 6);
});

Deno.test("Example 4", () => {
    const answer = part1("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg");
    assertEquals(answer, 10);
});

Deno.test("Example 5", () => {
    const answer = part1("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw");
    assertEquals(answer, 11);
});
