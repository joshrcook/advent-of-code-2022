const env = Deno.env.get("ENV");
const filename = env === "prod" ? "input.txt" : "test-input.txt";
const str = await Deno.readTextFile(filename);
const guideMap: {
    [key: string]: number
} = {
    A: 1,
    B: 2,
    C: 3,
    X: -1,
    Y: 0, 
    Z: 1,
};
const scoreRound = (them: number, us: number): number => {
    // draw
    if (us === 0) {
        return them + 3;
    }
    if (us === -1) {
        return them - 1 === 0 ? 3 : them - 1;
    }
    return ( them + 1 === 4 ? 1 : them + 1 ) + 6;
};
const sum = (prev: number, curr: number): number => prev + curr;
const games = await str.split(/\n/).map(game => game.split(/\s/).map(key => guideMap[key])).map((gameArr) => {
    return scoreRound(gameArr[0], gameArr[1]);
}).reduce(sum, 0);

console.log('answer', games);