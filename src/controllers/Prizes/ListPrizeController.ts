import { Request, Response } from "express";
import { ListPrizeService } from "../../services/Prizes/ListPrizeService";

class ListPrizeController {
  async handle(request: Request, response: Response) {
    const listPrizeService = new ListPrizeService();

    const prizes = await listPrizeService.execute();

    return response.json(prizes);
  }
}

export { ListPrizeController };
