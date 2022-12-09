const part1 = (input: string) => {
    const xArr = input.split(/\n/).map((row) => row.split('').map(n => parseInt(n)));
    const yArr = [...new Array(xArr[0].length)].fill(0).map((_, x) => {
        return [...new Array(xArr.length)].fill(0).map((_, y) => {
            return xArr[y][x];
        })
    });


    return xArr.reduce((prevTotal, y, yIndex) => {
        return prevTotal + y.reduce((prev, x, xIndex) => {
            
            if (xIndex === 0 || yIndex === 0 || xIndex === xArr.length - 1 || yIndex === yArr.length - 1) {
                return prev + 1;
            }

            const fromLeft = xArr[yIndex].slice(0, xIndex).every(n => n < x);
            const fromRight = xArr[yIndex].slice(xIndex + 1).every(n => n < x);
            const fromTop = yArr[xIndex].slice(0, yIndex).every(n => n < x);
            const fromBottom = yArr[xIndex].slice(yIndex + 1).every(n => n < x);
            
            if (fromLeft || fromRight || fromTop || fromBottom  ) {
                return prev + 1;
            }
            return prev;
        }, 0)
    }, 0)
};

export default part1;