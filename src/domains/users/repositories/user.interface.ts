import type { IUserDTO } from "../dtos/user.dto"

export interface IUsersRepository {
  create(user: IUserDTO): Promise<void>
  getByEmail(email: string): Promise<IUserDTO | null>
}
