import { EntityRepository, Repository } from "typeorm";
import { Status } from "../models/Status";

@EntityRepository(Status)
class StatusRepositories extends Repository<Status> {}

export { StatusRepositories };
