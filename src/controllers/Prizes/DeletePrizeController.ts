import { Request, Response } from "express";
import { DeletePrizeService } from "../../services/Prizes/DeletePrizeService";

class DeletePrizeController {
  async handle(request: Request, response: Response) {

    const { prize_id } = request.params;
    const deletePrizeService = new DeletePrizeService();

    const prize = await deletePrizeService.execute({
      prize_id
    });

    return response.json(prize);
  }
}

export { DeletePrizeController };
