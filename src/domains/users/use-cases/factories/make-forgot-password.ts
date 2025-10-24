import { ForgetPasswordUseCase } from "../forgot-password"
import { UsersRepository } from "../../repositories/Knex/users.repository"

export function makeForgotPassword() {
  const usersRepository = new UsersRepository()
  const forgetPasswordUseCase = new ForgetPasswordUseCase(UsersRepository)

  return forgetPasswordUseCase
}
