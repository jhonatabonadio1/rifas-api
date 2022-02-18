import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const {
      name,
      phone,
      email,
      avatar,
      cpf,
      birthdate,
      password
    } = request.body;
    const { user_id } = request;
    const updateUserService = new UpdateUserService();

    const data = {
      user_id,
      name,
      phone,
      email,
      avatar,
      cpf,
      birthdate,
      password,
    }

    const user = await updateUserService.execute({
      data
    });

    return response.json(user);
  }
}

export { UpdateUserController };
