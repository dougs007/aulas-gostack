import { Request, Response } from 'express';
import createUser from './services/createUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'douglas',
    password: '123456',
    techs: [
      'Adonis',
      'NodeJS',
      'ReactNative',
      { title: 'ReactJS', experience: 1 }
    ]
  });

  return response.json({ message: 'Hello World' })
}
