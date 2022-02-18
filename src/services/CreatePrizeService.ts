import { getCustomRepository } from "typeorm";
import { PrizesRepositories } from "../repositories/PrizesRepositories";

interface IPrizeRequest {
  title: string;
  subtitle?: string;
  description?: string;
  unique_price: number;
  minimum_sales?: number;
  total_numbers: number;
  status_id: number;
  end_at: Date;
}

class CreatePrizeService {
  async execute({
    title,
    subtitle,
    description,
    unique_price,
    minimum_sales,
    total_numbers,
    status_id,
    end_at,
  }: IPrizeRequest) {
    const prizesRepository = getCustomRepository(PrizesRepositories);

    const user = prizesRepository.create({
      title,
      subtitle,
      description,
      unique_price,
      minimum_sales,
      total_numbers,
      status_id,
      end_at
    });

    await prizesRepository.save(user);

    return user;
  }
}

export { CreatePrizeService };
