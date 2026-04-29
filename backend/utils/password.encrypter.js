import * as argon2 from "argon2"; //we just imported all the function inside argon2 but you can import each by your choice also
import credential from "../models/usercredential.js";

export async function passwordEncrypter(password) {
  try {
    const hashedPass = await argon2.hash(password); //you can provide multiple parameters to it for e.g see at the bottom
    return hashedPass;
  } catch (error) {
    console.log("failed to Encrypt the password!");
  }
}

//For using multiple parameters (use them otherwise it uses a lot of resources):-
// await argon2.hash(password, {
//             type: argon2.argon2id,        // must
//             memoryCost: 65536,            // 64 MiB - strong
//             timeCost: 3,                  // iterations
//             parallelism: 1,               // threads
//             // hashLength: 32,            // default 32 bytes enough
