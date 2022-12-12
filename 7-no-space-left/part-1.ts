// deno-lint-ignore-file
import {
  set,
  get,
} from "https://raw.githubusercontent.com/lodash/lodash/4.17.21-es/lodash.js";

const part1 = (input: string) => {
  let finder: any = {};
  let path: string[] = [];
  const lines = input
    .split(/\$\s/)
    .filter((n) => n !== "")
    .map((n) => n.split(/\n/).filter((n) => n));
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const command = line[0];
    if (command.startsWith("cd")) {
      const commandPath = command.split(/\s/)[1];
      if (commandPath.match(/[a-z]+/)) {
        path.push(commandPath);
      }
      if (commandPath === "..") {
        path.pop();
      }
    }
    if (command.startsWith("ls")) {
      const fileDirs = line.slice(1);

      for (let j = 0; j < fileDirs.length; j++) {
        const fileDir = fileDirs[j];
        if (fileDir.startsWith("dir")) {
          const fileName = fileDir.split(/\s/)[1];
          set(finder, [...path, fileName].join("."), {});
        } else {
          const [fileSize, fileName] = fileDir.split(/\s/);
          set(
            finder,
            [...path, `['${fileName}']`].join("."),
            parseInt(fileSize)
          );
        }
      }
    }
  }

  console.log("finder", JSON.stringify(finder, null, 4));

  let sizes: { [key: string]: any } = {};
  const size = (obj: any, path: string[] = []): number => {
    const entries = Object.entries(obj);
    const directories = entries.filter(entry => typeof entry[1] === 'object')
    // Add new paths to the sizes object
    directories.forEach(([directoryName, directory]) => {
        const dirKey = [...path, directoryName].join('.')
      sizes[dirKey] = size(directory, [...path, directoryName]);
    });

    // Return all file sizes
    let totalSize = 0;
    for (let i = 0; i < entries.length; i++) {
        if (totalSize > 100000) {
            totalSize = 0;
            break;
        }
        const [key, value] = entries[i];
        if (typeof value === 'object') {
            totalSize += size(value, [...path, key]);
        } else if (Number.isInteger(value)) {
            totalSize += value as number;
        }
    }
    return totalSize;
  };

  size(finder);

  console.log("sizes", sizes);

  return Object.values(sizes)
    .filter((v) => v <= 100000)
    .reduce((prev, curr) => {
      return prev + curr;
    }, 0);
};

export default part1;
