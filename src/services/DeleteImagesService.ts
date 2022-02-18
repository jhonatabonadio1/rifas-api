import { getCustomRepository } from "typeorm";
import { ImagesRepositories } from "../repositories/ImagesRepositories";

interface IDevice {
  image_id: string;
}

class DeleteImagesService {
  async execute({ image_id }: IDevice) {
    const imagesRepository = getCustomRepository(ImagesRepositories);

    const image = await imagesRepository.findOne({
      id: image_id
    });

    if(!image) {
      throw new Error("Image does not exists");
    }

    imagesRepository.delete(image)

    return;
  }
}

export { DeleteImagesService };
