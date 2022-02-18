import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";
import { cpf as cpfNumber } from 'cpf-cnpj-validator'

interface IUserRequest {
  name: string;
  email: string;
  cpf?: string;
  phone: string;
  birthdate?: boolean;
  avatar?: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, cpf, phone, birthdate, avatar, password }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new Error("Email incorrect");
    }

    const validateCpf = cpfNumber.isValid(cpf)

    if(!validateCpf){
      throw new Error("Invalid cpf");
    }

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      phone,
      cpf,
      birthdate,
      admin: false,
      avatar,
      password: passwordHash
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
