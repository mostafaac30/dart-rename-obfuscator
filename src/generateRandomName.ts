function generateRandomName(length: number): string {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let name = '';
  for (let i = 0; i < length; i++) {
    name += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  // Ensure that the name is a valid identifier
  if (!RegExp('/^[a-zA-Z_][a-zA-Z0-9_]*$/').test(name)) {
    name = 'a' + name; // Add underscore prefix if necessary
  }

  return name;
}


export default generateRandomName;