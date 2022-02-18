import { EntityRepository, Repository } from "typeorm";
import { Prize } from "../models/Prize";

@EntityRepository(Prize)
class PrizesRepositories extends Repository<Prize> {}

export { PrizesRepositories };
