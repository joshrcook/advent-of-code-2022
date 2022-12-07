// deno-lint-ignore-file
import { set, get } from 'https://raw.githubusercontent.com/lodash/lodash/4.17.21-es/lodash.js';

const part1 = (input: string) => {
    let finder: any = {};
    let path: string[] = [];
    const lines = input.split(/\$\s/).filter(n => n !== '').map(n => n.split(/\n/).filter(n => n));
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const command = line[0];
        if (command.startsWith('cd')) {
            const commandPath = command.split(/\s/)[1];
            if (commandPath.match(/[a-z]+/)) {
                path.push(commandPath);
            }
            if (commandPath === '..') {
                path.pop();
            }
        }
        if (command.startsWith('ls')) {
            const fileDirs = line.slice(1);

            for (let j = 0; j < fileDirs.length; j++) {
                const fileDir = fileDirs[j];
                if (fileDir.startsWith('dir')) {
                    const fileName = fileDir.split(/\s/)[1];
                    set(finder, [...path, fileName].join('.'), {});
                } else {
                    const [fileSize, fileName] = fileDir.split(/\s/);
                    
                    set(finder, [...path, `['${fileName}']`].join('.'), parseInt(fileSize))
                }
            }
        }
    }
    
    let sizes: { [key: string]: any } = {}
    const size = (obj: any, path: string[] = []): number => {
        const entries: [string, number | { [key: string]: any }][] = Object.entries(obj);
        const directories = entries.filter(([_, value]) => typeof value === 'object');

        // Add new paths to the sizes object
        directories.forEach(directory => {
            sizes[directory[0]] = size(directory[1], [...path, directory[0]])
        });

        // Return all file sizes
        return entries.reduce((prev: number, curr: [string, number | { [key: string]: any }]) => {
            const [key, value] = curr;
            if (typeof value === 'object') {
                return prev + size(value, [...path, key])
            } 
            if (Number.isInteger(value)) {
                return prev + value;
            }
        }, 0);
    };

    size(finder);

    return Object.entries(sizes).filter(([key, value]) => value <= 100000 ).reduce((prev, curr) => {
        return prev + curr[1];
    }, 0);
}

export default part1;