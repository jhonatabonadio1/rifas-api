import { getCustomRepository } from "typeorm";
import { PrizesRepositories } from "../repositories/PrizesRepositories";
import { StatusRepositories } from "../repositories/StatusRepositories";

interface IPrizeRequest {
  prize_id: string;
  title: string;
  subtitle?: string;
  description?: string;
  unique_price: number;
  minimum_sales?: number;
  total_numbers: number;
  status_id: number;
  end_at: Date;
}

class UpdatePrizeService {
  async execute({
    prize_id,
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
    const statusRepository = getCustomRepository(StatusRepositories);

    const prize = await prizesRepository.findOne({
      id: prize_id
    })

    const verifyStatusExists = await statusRepository.findOne({
      id: status_id
    })

    if(status_id){
      if(!verifyStatusExists){
        throw new Error("Prize status does not exists.")
      }
    }

    if(!prize){
      throw new Error("Prize does not exists.")
    }

    prize.title = title ? title : prize.title
    prize.subtitle = subtitle ? subtitle : prize.subtitle
    prize.description = description ? description : prize.description
    prize.unique_price = unique_price ? unique_price : prize.unique_price
    prize.minimum_sales = minimum_sales ? minimum_sales : prize.minimum_sales
    prize.total_numbers = total_numbers ? total_numbers : prize.total_numbers
    prize.status_id = status_id ? status_id : prize.status_id
    prize.end_at = end_at ? end_at : prize.end_at

    await prizesRepository.save(prize);

    return prize;
  }
}

export { UpdatePrizeService };
