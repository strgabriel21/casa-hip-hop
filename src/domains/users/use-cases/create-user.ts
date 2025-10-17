// import { object } from "zod"
import type { UserCreateRequestDto } from "../dtos/user/user-create-request.dto"
import type { IUsersRepository } from "../repositories/user.interface"
import { generateHash } from "../../../shared/utils/encrypt"

export class CreateUser {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(user: UserCreateRequestDto): Promise<void> {
    const userExists = await this.usersRepository.getByEmail(user.email)

    if (userExists) {
      throw new Error("User already exists")
    }

    const hashedPassword = await generateHash(user.password)

    Object.assign(user, { password: hashedPassword })

    await this.usersRepository.create(user)
  }
}
