import { connection } from "../../../../config/database"
import type { UserCreateRequestDto } from "../../dtos/user/user-create-request.dto"
import type { UserCreateResponseDto } from "../../dtos/user/user-create-response.dto"
import type { IUsersRepository } from "../user.interface"

export class UsersRepository implements IUsersRepository {
  async create(user: UserCreateRequestDto): Promise<void> {
    await connection
      .insert({
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .into("users")
  }

  async getByEmail(email: string): Promise<UserCreateResponseDto | null> {
    const user = await connection
      .select("*")
      .from("users")
      .where("email", email)
      .first()
    return user
  }
}
