const env = Deno.env.get("ENV");
const filename = env === "prod" ? "input.txt" : "test-input.txt";
const str = await Deno.readTextFile(filename);

const isContained = (pair1: number[], pair2: number[]) => {
    const isStartInRange = pair1[0] >= pair2[0] && pair1[0] <= pair2[1];
    const isEndInRange = pair1[1] <= pair2[1];
    return isStartInRange && isEndInRange;
}
  

const answer = str
  .split(/\n/)
  .map((pair) =>
    pair
      .split(",")
      .map((assignment) => assignment.split("-").map((str) => parseInt(str)))
  )
  .filter((pairs) => {
    const [firstPair, secondPair] = pairs;
    const isFirstPairContainedInSecond = isContained(firstPair, secondPair);
    const isSecondPairContainedInFirst = isContained(secondPair, firstPair);
    return isFirstPairContainedInSecond || isSecondPairContainedInFirst;
  }).length;

console.log("answer", answer);
