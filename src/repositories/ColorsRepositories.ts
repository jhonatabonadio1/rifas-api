import { EntityRepository, Repository } from "typeorm";
import { Color } from "../models/Color";

@EntityRepository(Color)
class ColorsRepositories extends Repository<Color> {}

export { ColorsRepositories };
