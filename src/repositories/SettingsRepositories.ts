import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../models/Setting";

@EntityRepository(Setting)
class SettingsRepositories extends Repository<Setting> {}

export { SettingsRepositories };
