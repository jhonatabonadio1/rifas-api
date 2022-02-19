import { Request, Response } from "express";
import { CreatePrizeService } from "../../services/CreatePrizeService";

class CreatePrizeController {
  async handle(request: Request, response: Response) {
    const {
      title,
      subtitle,
      description,
      unique_price,
      minimum_sales,
      total_numbers,
      status_id,
      end_at
     } = request.body;

    const createPrizeService = new CreatePrizeService();

    const prize = await createPrizeService.execute({
      title,
      subtitle,
      description,
      unique_price,
      minimum_sales,
      total_numbers,
      status_id,
      end_at
    });

    return response.json(prize);
  }
}

export { CreatePrizeController };
