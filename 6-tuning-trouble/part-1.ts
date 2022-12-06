export default function (input: string) {
    const SEQUENCE_LEN = 4;

    const streamCache = [];
    let markerNum = -1;

    for (let i = 0; i < input.length; i++) {
        markerNum = i + 1;
        streamCache.push(input[i]);
        if (streamCache.length > SEQUENCE_LEN) {
            streamCache.shift();
        }
        const uniqueItems = new Set(streamCache);
        if (uniqueItems.size === SEQUENCE_LEN) {
            break;
        }
    }

    return markerNum;
}
