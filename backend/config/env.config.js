import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") }); //THis is because we always use dotenv in the root folder where there is package.json

export const PORT = Number(process.env.PORT);
export const Connection_String = process.env.Connection_String;


