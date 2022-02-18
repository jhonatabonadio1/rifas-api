import { getCustomRepository } from "typeorm";
import { ImagesRepositories } from "../repositories/ImagesRepositories";

interface IPrizeRequest {
  image_id: string;
  order: number;
}

class UpdateImageOrderService {
  async execute({
    image_id,
    order
  }: IPrizeRequest) {
    const imagesRepository = getCustomRepository(ImagesRepositories);

    const image = await imagesRepository.findOne({
      id: image_id
    })

    if(image){
      if(!image){
        throw new Error("Prize status does not exists.")
      }
    }

    image.order = order ? order : image.order

    await imagesRepository.save(image);

    return image;
  }
}

export { UpdateImageOrderService };
