import { EntityRepository, Repository } from "typeorm";
import { Address } from "../models/Address";

@EntityRepository(Address)
class AddressRepositories extends Repository<Address> {}

export { AddressRepositories };
