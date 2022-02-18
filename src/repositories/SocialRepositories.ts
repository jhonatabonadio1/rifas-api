import { EntityRepository, Repository } from "typeorm";
import { Social } from "../models/Social";

@EntityRepository(Social)
class SocialRepositories extends Repository<Social> {}

export { SocialRepositories };
