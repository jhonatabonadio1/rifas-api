import { getCustomRepository } from "typeorm";
import { ImagesRepositories } from "../repositories/ImagesRepositories";

interface IListImages{
  prize_id: string;
}

class ListImagesService {
  async execute({prize_id}: IListImages) {
    const imagesRepository = getCustomRepository(ImagesRepositories);

    const images = await imagesRepository.find({
      prize_id
    })

    if(!images){
      throw new Error("Prize does not exists.")
    }

    return images

  }
}

export { ListImagesService };
