import { Login } from "../login"
import { UsersRepository } from "../../repositories/Knex/users.repository"

export function makeLogin() {
  const usersRepository = new UsersRepository()
  const login = new Login(usersRepository)

  return login
}
