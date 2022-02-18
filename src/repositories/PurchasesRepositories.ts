import { EntityRepository, Repository } from "typeorm";
import { Purchase } from "../models/Purchase";

@EntityRepository(Purchase)
class PurchasesRepositories extends Repository<Purchase> {}

export { PurchasesRepositories };
