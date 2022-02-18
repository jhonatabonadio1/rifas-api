import { Request, Response } from "express";
import { ListImagesService } from "../services/ListImagesService";

class ListImagesController {
  async handle(request: Request, response: Response) {
    const listImagesService = new ListImagesService();

    const {prize_id} = request.params

    const images = await listImagesService.execute({prize_id});

    return response.json(images);
  }
}

export { ListImagesController };
