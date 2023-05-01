// Methods

// getAllDartFiles(dirPath: string): Promise<string[]> - Recursively searches the specified directory for .dart files and returns an array of their file paths.


import fs from 'fs';
import path from 'path';

// This function recursively searches for all .dart files in the given directory
// and its subdirectories and returns an array of file paths
export function getAllDartFiles(dir: string): string[] {
  let dartFiles: string[] = [];

  // Read the contents of the directory
  const files = fs.readdirSync(dir);

  // Loop through each file and check if it's a directory or a .dart file
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const fileStat = fs.statSync(filePath);

    if (fileStat.isDirectory()) {
      // If it's a directory, recursively call this function on that directory
      dartFiles = dartFiles.concat(getAllDartFiles(filePath));
    } else if (file.endsWith('.dart')) {
      // If it's a .dart file, add it to the array of dartFiles
      dartFiles.push(filePath);
    }
  });

  return dartFiles;
}

