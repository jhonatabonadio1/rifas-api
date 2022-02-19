import { getCustomRepository } from "typeorm";
import { PrizesRepositories } from "../../repositories/PrizesRepositories";

class ListPrizeService {
  async execute() {
    const prizesRepository = getCustomRepository(PrizesRepositories);

    const prizes = await prizesRepository.find()

   return prizes

  }
}

export { ListPrizeService };
