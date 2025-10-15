import type { IUserDTO } from "../dtos/user.dto"
import type { IUsersRepository } from "../repositories/user.interface"

export class CreateUser {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(user: IUserDTO): Promise<void> {
    const userExists = await this.usersRepository.getByEmail(user.email)

    if (userExists) {
      throw new Error("User already exists")
    }

    //onst hashedPassword = await generateHash(user.password)

    //ject.assign(user, { password: hashedPassword })

    await this.usersRepository.create(user)
  }
}
