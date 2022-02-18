import { EntityRepository, Repository } from "typeorm";
import { Promotion } from "../models/Promotion";

@EntityRepository(Promotion)
class PromotionsRepositories extends Repository<Promotion> {}

export { PromotionsRepositories };
