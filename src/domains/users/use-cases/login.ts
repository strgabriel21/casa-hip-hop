import jwt from "jsonwebtoken"

import { compareHash } from "../../../shared/utils/encrypt"
import type { authRequestDto } from "../dtos/auth/auth.request"
import type { IUsersRepository } from "../repositories/user.interface"
import { env } from "../../../shared/env/environments"

export class Login {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: authRequestDto) {
    const user = await this.usersRepository.getByEmail(data.email)

    if (!user || !user.password) {
      throw new Error("User not found")
    }

    const passwordMatch = await compareHash(data.password, user.password)

    if (!passwordMatch) {
      throw new Error("Invalid credentials")
    }

    const token = jwt.sign({ id: user.id }, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRES_IN,
    } as any)

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        status: user.status,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
      },
      token,
    } as ILoginResponseDTO
  }
}
