import { Request, Response } from "express";
import { UpdateUserPrivilegesService } from "../services/UpdateUserPrivilegesService";

class UpdateUserPrivilegesController {
  async handle(request: Request, response: Response) {
    const {
      user_id,
      admin
    } = request.body;
    const updateUserPrivilegesService = new UpdateUserPrivilegesService();

    const data = {
      user_id,
      admin
    }

    const user = await updateUserPrivilegesService.execute({
      data
    });

    return response.json(user);
  }
}

export { UpdateUserPrivilegesController };
