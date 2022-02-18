import { EntityRepository, Repository } from "typeorm";
import { Order } from "../models/Order";

@EntityRepository(Order)
class OrdersRepositories extends Repository<Order> {}

export { OrdersRepositories };
