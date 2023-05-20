import bcrypt from "bcrypt";

const saltRounds: number = 10;

export const hashPassword = (password: string): Promise<string> => {
  return bcrypt.hash(password, saltRounds);
};

export const comparePassword = (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};
