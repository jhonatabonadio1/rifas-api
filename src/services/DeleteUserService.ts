import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IDevice {
  user_id: string;
}

class DeleteUserService {
  async execute({ user_id }: IDevice) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new Error("User does not exists");
    }

    usersRepository.delete(user_id)

    return;
  }
}

export { DeleteUserService };
