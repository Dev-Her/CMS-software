import path from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "dotenv";

const currentFile = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFile);
const backendRoot = path.resolve(currentDirectory, "../..");

config({ path: path.join(backendRoot, ".env") });
