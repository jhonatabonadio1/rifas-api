import { getCustomRepository } from "typeorm";
import { PrizesRepositories } from "../repositories/PrizesRepositories";

interface IDevice {
  prize_id: string;
}

class DeletePrizeService {
  async execute({ prize_id }: IDevice) {
    const prizesRepository = getCustomRepository(PrizesRepositories);

    const user = await prizesRepository.findOne(prize_id);

    if(!user) {
      throw new Error("Prize does not exists");
    }

    prizesRepository.delete(prize_id)

    return;
  }
}

export { DeletePrizeService };
