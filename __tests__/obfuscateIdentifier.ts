// const assert = require('assert');
// const path = require('path');
// const fs = require('fs');

// // Import the function to test
// const { obfuscateIdentifier } = require('../src/obfuscate');

// describe('obfuscateIdentifier function', () => {
//     it('should return the original identifier if it is a reserved keyword or not user-defined', () => {
//         // const appDir = path.join(__dirname, 'test_app');
//         // const identifier1 = 'int';
//         // const result1 = obfuscateIdentifier(identifier1, appDir);
//         // assert.strictEqual(result1, identifier1);

//         // const identifier2 = 'nonexistent_identifier';
//         // const result2 = obfuscateIdentifier(identifier2, appDir);
//         // assert.strictEqual(result2, identifier2);
//     });

//     it('should obfuscate the identifier and update all references to it in the app directory', () => {
//         // const appDir = path.join(__dirname, 'test_app');
//         // const identifier = 'myVariable';
//         // const expected = 'obfuscatedName';
//         // const filePath1 = path.join(appDir, 'lib', 'file1.dart');
//         // const fileContents1 = `final $identifier = 42;\nprint('now printing $identifier');\n`;
//         // const filePath2 = path.join(appDir, 'lib', 'file2.dart');
//         // const fileContents2 = `import 'file1.dart';\nprint($identifier);\n`;
//         // fs.writeFileSync(filePath1, fileContents1);
//         // fs.writeFileSync(filePath2, fileContents2);

//         // const result = obfuscateIdentifier(identifier, appDir);

//         // assert.strictEqual(result, expected);

//         // const updatedFileContents1 = fs.readFileSync(filePath1, 'utf8');
//         // assert.strictEqual(updatedFileContents1, `final ${expected} = 42;\nprint('now printing $identifier');\n`);

//         // const updatedFileContents2 = fs.readFileSync(filePath2, 'utf8');
//         // assert.strictEqual(updatedFileContents2, `import 'file1.dart';\nprint(${expected});\n`);
//     });

//     it('should not replace text that is not a Dart identifier', () => {
//         // const appDir = path.join(__dirname, 'test_app');
//         // const identifier = 'myVariable';
//         // const expected = 'obfuscatedName';
//         // const filePath1 = path.join(appDir, 'lib', 'file1.dart');
//         // const fileContents1 = `final $identifier = 42;\nprint('now printing $${identifier}');\n`;
//         // fs.writeFileSync(filePath1, fileContents1);

//         // const result = obfuscateIdentifier(identifier, appDir);

//         // assert.strictEqual(result, expected);

//         // const updatedFileContents1 = fs.readFileSync(filePath1, 'utf8');
//         // assert.strictEqual(updatedFileContents1, `final ${expected} = 42;\nprint('now printing $${identifier}');\n`);
//     });
// });
