// url_test.ts
import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import * as path from "https://deno.land/std/path/mod.ts";
import part1 from '../part-1.ts';

const __dirname = path.dirname(path.fromFileUrl(import.meta.url));
const filename = path.resolve(__dirname, '../test-input.txt');

const input = await Deno.readTextFile(filename);

Deno.test("test part 1", () => {

  const solution = part1(input);
  assertEquals(solution, 21);
});