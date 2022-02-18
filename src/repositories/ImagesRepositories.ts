import { EntityRepository, Repository } from "typeorm";
import { Image } from "../models/Image";

@EntityRepository(Image)
class ImagesRepositories extends Repository<Image> {}

export { ImagesRepositories };
