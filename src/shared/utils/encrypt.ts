//import { env } from "../env/environments"
import bcrypt from "bcrypt"

export async function generateHash(password: string): Promise<string> {
  return await bcrypt.hash(password, 10)
}

export async function compareHash(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword)
}
