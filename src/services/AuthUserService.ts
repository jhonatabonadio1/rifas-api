import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

interface IPayload {
  sub: string;
}

class AuthUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({
      email,
    });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    const token = sign(
      {
        email: user.email,
      },
      "4f93ac9d10cb751b8c9c646bc9dbccb9",
      {
        subject: user.id,
        expiresIn: "1d"
      }
    );

    const { sub } = verify(
      token,
      "4f93ac9d10cb751b8c9c646bc9dbccb9"
    ) as IPayload;

    const user_id = sub;

    const findUser = await usersRepositories.findOne({id: user_id})

    const response = {
      token: token,
      user: findUser
    }

    return response;

  }
}

export { AuthUserService };
