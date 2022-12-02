const env = Deno.env.get("ENV");
const filename = env === "prod" ? "input.txt" : "test-input.txt";
const str = await Deno.readTextFile(filename);
const guideMap = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2, 
    Z: 3,
};
const scoreRound = (them: number, us: number): number => {
    // draw
    if (them === us) return us + 3;
    let modifiedUs = us === 1 ? 4 : us;
    // winner
    if (them + 1 === modifiedUs) return us + 6;
    // loser
    return us;
};
const sum = (prev, curr) => prev + curr;
const games = await str.split(/\n/).map(game => game.split(/\s/).map(key => guideMap[key])).map((gameArr) => {
    return scoreRound(gameArr[0], gameArr[1]);
}).reduce(sum, 0);

console.log('answer', games);