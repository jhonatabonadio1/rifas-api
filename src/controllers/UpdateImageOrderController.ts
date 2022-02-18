import { Request, Response } from "express";
import { UpdateImageOrderService } from "../services/UpdateImageOrderService";

class UpdateImageOrderController {
  async handle(request: Request, response: Response) {

    const {image_id} = request.params
    const {
      order
    } = request.body;

    const updateImageOrderService = new UpdateImageOrderService();

    const image = await updateImageOrderService.execute({
      image_id,
      order
    });

    return response.json(image);
  }
}

export { UpdateImageOrderController };
