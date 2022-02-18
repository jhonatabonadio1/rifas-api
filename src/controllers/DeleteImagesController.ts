import { Request, Response } from "express";
import { DeleteImagesService } from "../services/DeleteImagesService";

class DeleteImagesController {
  async handle(request: Request, response: Response) {

    const { image_id } = request.params;
    const deleteImagesService = new DeleteImagesService();

    const image = await deleteImagesService.execute({
      image_id
    });

    return response.json(image);
  }
}

export { DeleteImagesController };
