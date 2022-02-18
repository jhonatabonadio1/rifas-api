import { getCustomRepository } from "typeorm";

import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUser{
  user_id: string;
}

class FindUserService {
  async execute({user_id}: IUser) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const user = await usersRepository.findOne(user_id)

    return user;
  }
}

export { FindUserService };
