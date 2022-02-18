import { EntityRepository, Repository } from "typeorm";
import { Schedule } from "../models/Schedule";

@EntityRepository(Schedule)
class SchedulesRepositories extends Repository<Schedule> {}

export { SchedulesRepositories };
