import type { UserCreateRequestDto } from "../dtos/user/user-create-request.dto"
import type { UserCreateResponseDto } from "../dtos/user/user-create-response.dto"

export interface IUsersRepository {
  create(user: UserCreateRequestDto): Promise<void>
  getByEmail(email: string): Promise<UserCreateResponseDto | null>
}
