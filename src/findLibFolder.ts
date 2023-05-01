// Methods

// findLibFolder(): Promise<string> - Finds the lib folder of the Flutter app and returns its path.


import { existsSync, readdirSync } from 'fs';

/**
 * Finds the `lib` folder in a Flutter project by recursively searching for it starting from the provided directory path.
 * @param dirPath The path of the directory to start searching from.
 * @returns The path of the `lib` folder if found, or `null` if not found.
 */
export function findLibFolder(dirPath: string): string | null {
  const files = readdirSync(dirPath);

  if (files.includes('lib')) {
    const libPath = `${dirPath}/lib`;
    if (existsSync(libPath)) {
      return libPath;
    }
  }

  for (const file of files) {
    const filePath = `${dirPath}/${file}`;
    if (existsSync(filePath) && !file.startsWith('.')) {
      const result = findLibFolder(filePath);
      if (result !== null) {
        return result;
      }
    }
  }

  return null;
}


