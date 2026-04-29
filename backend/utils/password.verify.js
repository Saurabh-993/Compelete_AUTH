import * as argon from "argon2";

export async function passwordVerifier(inputpass, storedHashDB) {
  try {
    const isMatch = await argon.verify(storedHashDB, inputpass);
    if (isMatch) {
      return true;
    }
  } catch (error) {
    console.log("There is an error", error);
  }
}
