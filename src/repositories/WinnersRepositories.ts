import { EntityRepository, Repository } from "typeorm";
import { Winner } from "../models/Winner";

@EntityRepository(Winner)
class WinnersRepositories extends Repository<Winner> {}

export { WinnersRepositories };
