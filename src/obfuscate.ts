// Methods

// obfuscateName(name: string, scope: string): string - Obfuscates the given name with a randomly generated string, using the specified scope to ensure uniqueness.
// obfuscateCode(code: string, keywords: string[], scope: string): string - Obfuscates all occurrences of the specified keywords in the given code, using obfuscateName() to generate new names.

import generateRandomName from "./generateRandomName";
import * as fs from "fs";
import * as path from "path";
import { FLUTTER_KEYWORDS, oopTypes, oopKeywords, dartDataTypes } from "./constants";
import { type } from "os";



function obfuscateName(name: string): string {
    // If the name is a reserved keyword, return the original name
    if (FLUTTER_KEYWORDS.includes(name)) {
        return name;
    }

    // Generate a new random name
    const randomNameLength = Math.floor(Math.random() * 10) + 5;
    const obfuscatedName = generateRandomName(randomNameLength);

    // Return the obfuscated name
    return obfuscatedName;
}

// // Define function to check if identifier is defined in user code


function isUserDefinedIdentifier(identifier: string, appDir: string): boolean {
    const libFolderPath = path.join(appDir, 'lib');
    const libFiles = fs.readdirSync(libFolderPath, { withFileTypes: true });
    for (const file of libFiles) {
        if (file.isFile()) {
            const filePath = path.join(libFolderPath, file.name);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const lines = fileContents.split('\n');
            for (const line of lines) {
                if (dartDataTypes.some(type => line.trim().startsWith(type))) {
                    // Check if the line defines the identifier as a class
                    const words = line
                        .split(' ')
                        .filter(word =>
                            ![dartDataTypes, ...oopKeywords].includes(word))
                        .map(word => word.trim());
                    console.log(words);

                    // Check if the line defines the identifier as a class or variable
                    const identifierIndex = words.indexOf(identifier);

                    const className = words[identifierIndex];
                    if (className === identifier) {
                        return true;
                    }

                }
                // else if (dartDataTypes.some(type => line.trim().startsWith(type))) {
                //     // Check if the line defines the identifier as a variable or uses one of the Dart data types
                //     const identifierName = line.trim().split(' ')[1];
                //     if (identifierName === identifier) {
                //         return true;
                //     }
                // }
            }
        }
    }
    return false;
}



// Define function to obfuscate identifier
function obfuscateIdentifier(identifier: string, appDir: string): string {
    const isReservedKeyword = FLUTTER_KEYWORDS.includes(identifier);
    if (isReservedKeyword || !isUserDefinedIdentifier(identifier, appDir)) {
        return identifier;
    }
    const obfuscatedName = obfuscateName(identifier);
    const libFolderPath = path.join(appDir, 'lib');
    const libFiles = fs.readdirSync(libFolderPath, { withFileTypes: true });
    for (const file of libFiles) {
        if (file.isFile()) {
            const filePath = path.join(libFolderPath, file.name);
            let fileContents = fs.readFileSync(filePath, 'utf8');
            const identifierRegex = new RegExp(`(?<=\\$)${identifier}(?=\\W|$)`, 'g');
            const matches = fileContents.match(identifierRegex);
            if (matches && matches.some(match => isUserDefinedIdentifier(match, appDir))) {
                fileContents = fileContents.replace(identifierRegex, obfuscatedName);

                const obfuscatedPath = path.join(
                    path.dirname(appDir),
                    "obfuscated",
                    path.basename(filePath)
                );
                fs.mkdirSync(path.dirname(obfuscatedPath), { recursive: true });
                fs.writeFileSync(obfuscatedPath, fileContents);


            }
        }
    }
    return obfuscatedName;
}





// Define a function to scan user-defined classes and store their data
// 1. addressing all user-defined classes first
// 2. make a model for each class that stores new class attributes and methods and their params


// Define a function to rescan user-defined classes and update their data


// 3. when finish scanning all files, rescan again with new data of changed classed stored
// 4. once, you find a class, lock up for this new name in the saved class, and change its attribute and method info
// 5. also once you find a variable, do the same thing. change its name and store it with keep tracking it 

// utilize isUserDefinedIdentifier, scanUserDefinedClasses, rescanUserDefinedClasses, obfuscateIdentifier



// define a function to loop throughout a file 
// and detect a line that defines a new class
// and detect a line that defines a new attribute
// and detect a line that defines a new method
// and detect a line that defines a new variable
// then store the name of the class, attribute, method, variable


//define list of strings
const definedNames: definedName[] = [];

type definedName = {
    name: string,
    obfuscatedName: string,
}


function detectDefinitionsInFile(filePath: string) {
    // Read the file contents
    const code = fs.readFileSync(filePath, 'utf8');
    const lines = code.split('\n');
    const regex = /(?<=var\s|final\s|const\s|static\s|class\s|if\s|else\s|for\s|while\s|do\s|switch\s|case\s|try\s|catch\s|finally\s|throw\s|rethrow\s|assert\s|break\s|continue\s|yield\s|await\s|async\s|typedef\s|get\s|set\s|operator\s|factory\s|this\s|super\s|void\s|bool\s|int\s|double\s|num\s|String\s|dynamic\s|Function\s|Null\s|true\s|false\s|void\s|never\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s)([a-zA-Z_$][a-zA-Z_$0-9]*)/gm;

    const matches = code.matchAll(regex);
    const variables = new Set(Array.from(matches, match => match[1]));

    console.log(variables);

    variables.forEach(variable => {
        const data = {
            name: variable,
            obfuscatedName: obfuscateName(variable)
        };
        if (!definedNames.some(name => name.name === data.name) &&
            !FLUTTER_KEYWORDS.includes(data.name)) {
            definedNames.push(data);
        }
    });


    // //process lines
    // for (let i = 0; i < lines.length; i++) {
    //     let line = lines[i].trim();

    //     if (dartDataTypes.some(type => line.trim().startsWith(type))) {
    //         // Check if the line defines the identifier as a class
    //         const words = line
    //             .split(' ')
    //             .filter(word =>
    //                 ![dartDataTypes, ...oopKeywords, ...FLUTTER_KEYWORDS].includes(word))
    //             .map(word => word.trim().replace(/[^a-zA-Z0-9]/g, ''));
    //         //remove all words with '()' 
    //         words.map(word => word.replace(/\(\)/g, ''));


    //         console.log(words);

    //         // Check if the line defines the identifier as a class or variable
    //         const identifierIndex = 0;

    //         const className = words[identifierIndex];
    //         const data = {
    //             name: className,
    //             obfuscatedName: obfuscateName(className)
    //         };
    //         if (!definedNames.some(name => name.name === data.name)) {
    //             definedNames.push(data);
    //         }


    //     }


    // }
}

// Define a function to obfuscate a Dart file
function obfuscateCode(appDir: string): string {
    // loop through all files in the lib folder
    const libFolderPath = path
        .join(appDir, 'lib')
        .replace(/\\/g, '/');
    const libFiles = fs.readdirSync(libFolderPath, { withFileTypes: true });
    const regex = `(?<=var\s|final\s|const\s|static\s|class\s|if\s|else\s|for\s|while\s|do\s|switch\s|case\s|try\s|catch\s|finally\s|throw\s|rethrow\s|assert\s|break\s|continue\s|yield\s|await\s|async\s|typedef\s|get\s|set\s|operator\s|factory\s|this\s|super\s|void\s|bool\s|int\s|double\s|num\s|String\s|dynamic\s|Function\s|Null\s|true\s|false\s|void\s|never\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s)`;
    const beforeIdentifierRegEx = `var\s|final\s|const\s|static\s|class\s|if\s|else\s|for\s|while\s|do\s|switch\s|case\s|try\s|catch\s|finally\s|throw\s|rethrow\s|assert\s|break\s|continue\s|yield\s|await\s|async\s|typedef\s|get\s|set\s|operator\s|factory\s|this\s|super\s|void\s|bool\s|int\s|double\s|num\s|String\s|dynamic\s|Function\s|Null\s|true\s|false\s|void\s|never\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s|void\s|dynamic\s|Null\s|bool\s|int\s|double\s|num\s|String\s|Function\s|Object\s|List\s|Map\s|Set\s|Iterable\s|Future\s|Stream\s|Sink\s`;
    for (const file of libFiles) {
        // load file contents
        // search for class, attribute, method, variable stored in definedClasses, definedVariables, definedFunctions
        // if found, obfuscate the name across all files
        // save the file in the obfuscated folder

        if (file.isFile()) {
            const filePath = path.join(libFolderPath, file.name);
            let fileContents = fs.readFileSync(filePath, 'utf8');
            // detectDefinitionsInFile(filePath);
            for (const className of definedNames) {
                const obfuscatedName = className.obfuscatedName;
                console.log(className.name, obfuscatedName);
                const searchRegex = new RegExp(`(\\b${beforeIdentifierRegEx})?\\b${className.name}\\b`, 'gm');
                fileContents = fileContents.replace(searchRegex, obfuscatedName);
            }

            const obfuscatedPath = path
                .join(
                    path.dirname(appDir),
                    'obfuscated',
                    path.basename(filePath)
                )
                .replace(/\\/g, '/');
            fs.mkdirSync(path.dirname(obfuscatedPath), { recursive: true });
            fs.writeFileSync(obfuscatedPath, fileContents);
        }

    }
    return 'Obfuscation complete';

}


export { obfuscateName, obfuscateCode, obfuscateIdentifier, detectDefinitionsInFile };
