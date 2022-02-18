import { Request, Response } from "express";
import { CreateImagesService } from "../services/CreateImagesService";

class CreateImagesController {
  async handle(request: Request, response: Response) {
    const {
      prize_id,
      url,
      order
     } = request.body;

    const createImagesService = new CreateImagesService();

    const image = await createImagesService.execute({
      prize_id,
      url,
      order
    });

    return response.json(image);
  }
}

export { CreateImagesController };
