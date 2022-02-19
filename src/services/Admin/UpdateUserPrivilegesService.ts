import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IUserRequest {
  user_id: string;
  admin?: boolean;
}

interface Data {
  data: IUserRequest
}

class UpdateUserPrivilegesService {
  async execute({ data }: Data) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const user = await usersRepository.findOne({
        id: data.user_id,
    });

    if (!user) {
      throw new Error("User does not exists");
    }

    user.admin = data.admin

    await usersRepository.save(user);

    return user;
  }
}

export { UpdateUserPrivilegesService };
