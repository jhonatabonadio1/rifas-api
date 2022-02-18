import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, cpf, phone, birthdate, admin, avatar, password } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      phone,
      cpf,
      birthdate,
      admin,
      avatar,
      password
    });

    return response.json(user);
  }
}

export { CreateUserController };
