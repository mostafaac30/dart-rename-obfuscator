// Methods

import path from "path";
import { mangleCode, uglifyCode } from "./src/codeMangling";
import { encryptCode } from "./src/encryption";
import { findLibFolder } from "./src/findLibFolder";
import generateRandomName from "./src/generateRandomName";
import { getAllDartFiles } from "./src/getAllDartFiles";
import { obfuscateCode, detectDefinitionsInFile } from "./src/obfuscate";
import * as fs from "fs";

// main(): Promise<void> - The main entry point of the script.

async function main(): Promise<void> {
    // Get directory path from command line argument
    const args = process.argv.slice(2);
    const dirPath = args[0];
    if (!dirPath) {
        console.error("Error: Please provide a directory path as an argument");
        return;
    }
    console.log(`Obfuscating .dart files in directory: ${dirPath}`);

    try {
        const libFolderPath = findLibFolder(dirPath);
        if (!libFolderPath) {
            console.log("Error: could not find 'lib' folder");
            return;
        }
        console.log(`Found 'lib' folder at ${libFolderPath}`);

        const dartFilePaths = getAllDartFiles(libFolderPath);
        console.log(`Found ${dartFilePaths.length} .dart files`);

        const scope = generateRandomName(8);

        for (const file of dartFilePaths) {
            detectDefinitionsInFile(file);
        }
        obfuscateCode(dirPath);
        // for (const file of dartFilePaths) {
        //     const obfuscatedCode = obfuscateCode(file);
        //     const mangledCode = mangleCode(obfuscatedCode);
        //     const uglifiedCode = uglifyCode(mangledCode);
        //     //   const encryptedCode = encryptCode(uglifiedCode, "my-secret-key");

        //     const obfuscatedPath = path.join(
        //         path.dirname(dirPath),
        //         "obfuscated",
        //         path.basename(file)
        //     );
        //     fs.mkdirSync(path.dirname(obfuscatedPath), { recursive: true });
        //     fs.writeFileSync(obfuscatedPath, obfuscatedCode);
        //     console.log(`Obfuscated ${file} with scope ${scope}`);
        // }

        console.log("All .dart files have been obfuscated");
        console.log("Obfuscation complete!");
    } catch (error) {
        console.error(`Error during obfuscation: ${error}`);
    }
}

main();