import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import {cpf as cpfNumber} from 'cpf-cnpj-validator'

interface IUserRequest {
  user_id: string;
  name?: string;
  phone?: string;
  email?: string;
  avatar?: string;
  cpf?: string;
  password?: string;
  birthdate?: Date;
}

interface Data {
  data: IUserRequest
}

class UpdateUserService {
  async execute({ data }: Data) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const user = await usersRepository.findOne({
        id: data.user_id,
    });

    if (!user) {
      throw new Error("User does not exists");
    }

    if(data.cpf){
      if(!cpfNumber.isValid(data.cpf)){
        throw new Error("Invalid cpf");
      }
    }

    user.name = data.name ? data.name : user.name
    user.phone = data.phone ? data.phone : user.phone
    user.email = data.email ? data.email : user.email
    user.avatar = data.avatar ? data.avatar : user.avatar
    user.cpf = data.cpf ? data.cpf : user.cpf
    user.birthdate = data.birthdate ? data.birthdate : user.birthdate

    if(data.password){
      const passwordHash = await hash(data.password, 8);
      user.password = data.password ? passwordHash : user.password
    }

    await usersRepository.save(user);

    return user;
  }
}

export { UpdateUserService };
