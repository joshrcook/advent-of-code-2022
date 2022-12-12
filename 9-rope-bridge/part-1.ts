export default function(input: string) {
    let parsedInput = input.split(/\n/).map(i => i.split(' '));
    let [head, tail] = [[0,0], [0,0]];

    const isTailWithinRange = (head: number[], tail: number[]) => {
        return (head[0] === tail[0] || head[0] === tail[0] - 1 || head[0] === tail[0] + 1) && (head[1] === tail[1] || head[1] === tail[1] - 1 || head[1] === tail[1] + 1);
    };

    const visits = parsedInput.reduce((prev, curr) => {
        const [direction, num] = curr;
        for (let i = 0; i < parseInt(num); i++) {
            let prevLocation = head.slice();
            switch (direction) {
                case 'R':
                    head[0] += 1;
                    break;
                case 'U':
                    head[1] += 1;
                    break;
                case 'D':
                    head[1] -= 1;
                    break;
                case 'L':
                    head[0] -= 1;
                    break;
            }
            if (!isTailWithinRange(head, tail)) {
                tail = prevLocation;
                prev.push(tail);
            }
        }
        return prev;
    }, [tail] as number[][]).map(([x, y]) => `[${x},${y}]`).filter((val, i, arr) => arr.indexOf(val) === i);

    return visits.length;
}