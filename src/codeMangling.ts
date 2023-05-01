// Methods

// mangleCode(code: string): string - Mangles the given code by replacing long variable and function names with shorter, cryptic names.
// uglifyCode(code: string): string - Minifies the given code by removing unnecessary whitespace and comments.

function mangleCode(code: string): string {
    // Split code into lines
    const lines = code.split("\n");
    const usedNames: Set<string> = new Set();
  
    // Loop through lines and replace variable and function names with mangled names
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
  
      // Replace variable names
      line = line.replace(/(\W)(\w{3,})(\W)/g, (match, p1, p2, p3) => {
        // Generate a new mangled name
        let mangledName = p2[0] + usedNames.size;
  
        // Add mangled name to used names set
        usedNames.add(mangledName);
  
        // Return the mangled name surrounded by the original non-alphanumeric characters
        return p1 + mangledName + p3;
      });
  
      // Replace function names
      line = line.replace(/(function\s+)(\w+)(\()/g, (match, p1, p2, p3) => {
        // Generate a new mangled name
        let mangledName = "fn" + usedNames.size;
  
        // Add mangled name to used names set
        usedNames.add(mangledName);
  
        // Return the mangled name surrounded by the original non-alphanumeric characters
        return p1 + mangledName + p3;
      });
  
      // Replace class names
      line = line.replace(/(class\s+)(\w+)/g, (match, p1, p2) => {
        // Generate a new mangled name
        let mangledName = "cls" + usedNames.size;
  
        // Add mangled name to used names set
        usedNames.add(mangledName);
  
        // Return the mangled name surrounded by the original non-alphanumeric characters
        return p1 + mangledName;
      });
  
      // Update the line in the lines array
      lines[i] = line;
    }
  
    // Join lines back into a single string
    const mangledCode = lines.join("\n");
  
    return mangledCode;
  }

  function uglifyCode(code: string): string {
    // Remove all whitespace (including newlines) and comments
    const regex = /\/\*[\s\S]*?\*\/|\/\/.*|\s+/g;
    return code.replace(regex, "");
  }

  export { mangleCode, uglifyCode };

