// Methods

// encryptCode(code: string, key: string): string - Encrypts the given code with the specified key using a symmetric encryption algorithm.
// decryptCode(code: string, key: string): string - Decrypts the given code with the specified key.

import * as crypto from 'crypto';

function encryptCode(code: string, key: string): string {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
  let encrypted = cipher.update(code, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return `${iv.toString('hex')}:${encrypted}`;
}

function decryptCode(code: string, key: string): string {
    const decipher = crypto.createDecipher('aes-256-cbc', key);
    let decrypted = decipher.update(code, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

export { encryptCode, decryptCode };