import { Request, Response } from "express";
import { UpdatePrizeService } from "../services/UpdatePrizeService";

class UpdatePrizeController {
  async handle(request: Request, response: Response) {

    const {prize_id} = request.params
    const {
      title,
      subtitle,
      description,
      unique_price,
      minimum_sales,
      total_numbers,
      status_id,
      end_at,
    } = request.body;

    const updateUserService = new UpdatePrizeService();

    const user = await updateUserService.execute({
      prize_id,
      title,
      subtitle,
      description,
      unique_price,
      minimum_sales,
      total_numbers,
      status_id,
      end_at
    });

    return response.json(user);
  }
}

export { UpdatePrizeController };
