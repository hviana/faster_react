const ITERATIONS = 10_000;
const HASH = "SHA-512";
const SALT_BYTE_LEN = 16; // 16 bytes = 128 bits
const KEY_BYTE_LEN = 64; // 64 bytes = 512 bits
const DERIVE_BITS = KEY_BYTE_LEN * 8; // in bits

/**
 * Convert an ArrayBuffer (or Uint8Array) to hex.
 */
function toHex(buffer: ArrayBuffer | Uint8Array): string {
  const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Convert a hex string to a Uint8Array.
 */
function fromHex(hex: string): Uint8Array {
  const bytes = hex.match(/.{1,2}/g);
  if (!bytes) throw new Error("Invalid hex string");
  return new Uint8Array(bytes.map((b) => parseInt(b, 16)));
}

/**
 * Derive a key buffer from password+salt.
 */
async function derive(
  password: string,
  salt: Uint8Array,
): Promise<ArrayBuffer> {
  const pwUtf8 = new TextEncoder().encode(password);
  const baseKey = await crypto.subtle.importKey(
    "raw",
    pwUtf8,
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  return await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      hash: HASH,
      salt,
      iterations: ITERATIONS,
    },
    baseKey,
    DERIVE_BITS,
  );
}

/**
 * Generate a salted PBKDF2 hash. Returns "saltHex:hashHex".
 */
async function pbkdf2(password: string): Promise<string> {
  // 1. Generate random salt
  const salt = crypto.getRandomValues(new Uint8Array(SALT_BYTE_LEN));
  // 2. Derive the key bytes
  const derived = await derive(password, salt);
  // 3. Return combined hex
  return `${toHex(salt)}:${toHex(derived)}`;
}

/**
 * Verify a password against a stored "saltHex:hashHex".
 */
async function pbkdf2Verify(
  stored: string,
  password: string,
): Promise<boolean> {
  const [saltHex, hashHex] = stored.split(":");
  if (!saltHex || !hashHex) return false;

  const salt = fromHex(saltHex);
  const derived = await derive(password, salt);
  const derivedHex = toHex(derived);

  // Constant-time compare
  if (derivedHex.length !== hashHex.length) return false;
  let diff = 0;
  for (let i = 0; i < hashHex.length; i++) {
    diff |= derivedHex.charCodeAt(i) ^ hashHex.charCodeAt(i);
  }
  return diff === 0;
}
export { pbkdf2, pbkdf2Verify };
