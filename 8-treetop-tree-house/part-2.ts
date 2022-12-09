

const part2 = (input: string): number => {
    const xArr = input.split(/\n/).map((row) => row.split('').map(n => parseInt(n)));
    const yArr = [...new Array(xArr[0].length)].fill(0).map((_, x) => {
        return [...new Array(xArr.length)].fill(0).map((_, y) => {
            return xArr[y][x];
        })
    });

    const viewMultiples = xArr.slice().map(y => y.slice().fill(0));

    for (let y = 0; y < xArr.length; y++) {
        for (let x = 0; x < xArr[y].length; x++) {
            const num = xArr[y][x];

            const reducer = (prev: number, curr: number, i: number, arr: number[]) => {
                if (curr < num) {
                    return prev + 1;
                }
                arr.splice(0);
                return prev + 1;
            };
            const toLeft = xArr[y].slice(0, x).reverse().reduce(reducer, 0);
            const toRight = xArr[y].slice(x + 1).reduce(reducer, 0);
            const toTop = yArr[x].slice(0, y).reverse().reduce(reducer, 0);
            const toBottom = yArr[x].slice(y + 1).reduce(reducer, 0);

            const multiple = toLeft * toRight * toTop * toBottom;
            // console.log(num, multiple, toLeft, toRight, toTop, toBottom);

            viewMultiples[y][x] = multiple
        }
    }

    return Math.max(...viewMultiples.map(y => Math.max(...y)));
};

export default part2;