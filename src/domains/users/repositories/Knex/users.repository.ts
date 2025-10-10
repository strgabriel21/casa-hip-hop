import { connection } from "../../../../config/database"
import type { IUserDTO } from "../../dtos/user.dto"

export class UsersRepository {
  async create(user: IUserDTO): Promise<void> {
    await connection
      .insert({
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .into("users")
  }

  async getByEmail(email: string): Promise<IUserDTO | null> {
    const user = await connection
      .select("*")
      .from("users")
      .where("email", email)
      .first()
    return user
  }
}
