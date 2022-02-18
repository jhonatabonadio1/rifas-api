import { getCustomRepository } from "typeorm";
import { ImagesRepositories } from "../repositories/ImagesRepositories";
import { PrizesRepositories } from "../repositories/PrizesRepositories";

interface IPrizeRequest {
    prize_id: string;
    url: string;
    order: number;
}

class CreateImagesService {
  async execute({
    prize_id,
    url,
    order
  }: IPrizeRequest) {

    const imagesRepository = getCustomRepository(ImagesRepositories);
    const prizesRepository = getCustomRepository(PrizesRepositories);

    const verifyPrizeExists = prizesRepository.findOne({
      id: prize_id
    })

    if(!verifyPrizeExists){
      throw new Error("Prize does not exists.")
    }

    const image = imagesRepository.create({
      prize_id,
      url,
      order
    });

    await imagesRepository.save(image);

    return image;
  }
}

export { CreateImagesService };
