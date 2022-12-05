const env = Deno.env.get("ENV");
const filename = env === "prod" ? "input.txt" : "test-input.txt";
const str = await Deno.readTextFile(filename);
const [stacks, movements] = str.split(/\n\n/);
const parsedStacks = stacks
  .split(/\n/)
  .reverse()
  .reduce((prev: Array<Array<string>>, curr, currIndex) => {
    if (currIndex === 0) {
      curr.match(/[0-9]/g)?.forEach(() => prev.push([]));
      return prev;
    }
    return prev.map((val, idx) => {
      const char = curr.charAt(idx * 4 + 1);
      if (char.charCodeAt(0) !== 32) {
        return [...val, char];
      }
      return val;
    });
  }, []);
const parsedMovements = movements
  .split(/\n/)
  .map((movement) =>
    movement.match(/[0-9]+/g)?.map((m, i) => {
      const num = parseInt(m);
      if (i === 0) return num;
      return num - 1;
    })
  )
  .filter((val) => typeof val !== "undefined") as Array<Array<number>>;

const answer = parsedMovements
  .reduce((prev, curr) => {
    const [numToMove, from, to] = curr;
    for (let i = 0; i < numToMove; i++) {
      const char = prev[from].pop();
      if (typeof char !== "undefined") {
        prev[to].push(char);
      }
    }
    return prev;
  }, parsedStacks)
  .reduce((prev, curr) => {
    const lastChar = curr.pop();
    return prev + lastChar;
  }, '');

console.log("answer", answer);
