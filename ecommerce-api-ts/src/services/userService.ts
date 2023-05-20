import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { hashPassword } from "../utils/password.util";

const userRepository = AppDataSource.getRepository(User);

export const create = async ({ username, password, email }): Promise<User> => {
  const hashedPassword = await hashPassword(password);

  const user = new User();
  user.username = username;
  user.password = hashedPassword;
  user.email = email;

  await userRepository.save(user);

  return user;
};

export const getUserByUsername = async (username: string): Promise<User> => {
  const user = await userRepository.findOneBy({ username: username });
  console.log(user)
  return user;
};
