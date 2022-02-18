import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";

class DeleteUserController {
  async handle(request: Request, response: Response) {

    const { user_id } = request.params;
    const deleteUserService = new DeleteUserService();

    const device = await deleteUserService.execute({
      user_id
    });

    return response.json(device);
  }
}

export { DeleteUserController };
