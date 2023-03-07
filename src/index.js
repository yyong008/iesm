import { fileURLToPath } from "node:url";
import { dirname } from "node:path"

/**
 * 
 * @param {Object} importMeta esm import.meta
 * @returns __filename, __dirname
 */
export default function defineVars(importMeta) {
  const __filename = fileURLToPath(importMeta.url);
  const __dirname = dirname(__filename);

  return { __filename, __dirname }
}
