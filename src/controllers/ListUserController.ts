import { Request, Response } from "express";
import { ListUserService } from "../services/ListUserService";

class ListUserController {
  async handle(request: Request, response: Response) {
    const createUserService = new ListUserService();

    const user = await createUserService.execute();

    return response.json(user);
  }
}

export { ListUserController };
