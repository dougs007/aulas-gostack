import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';
import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ email, name, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUsersExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUsersExists) {
      throw new AppError('Email address already used');
    }

    const hashedPassowrd = await hash(password, 8);

    const user = usersRepository.create({
      email,
      name,
      password: hashedPassowrd,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
