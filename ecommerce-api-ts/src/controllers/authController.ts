import { Request, Response } from "express";
import { getUserByUsername } from "../services/userService";
import { comparePassword } from "../utils/password.util";
import * as jwt from "jsonwebtoken";

const secret: string = "ul176AD^^^Eso[xQBMZ~";

export const login = async (req: Request, res: Response): Promise<any> => {
  const { username, password } = req.body;
  const user = await getUserByUsername(username);
  if (!user) {
    return res.status(401).send({ message: "Usuario o password incorrecto" });
  }

  const isPasswordValid = await comparePassword(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).send({ message: "Usuario o password incorrecto" });
  }

  const token = jwt.sign({ userId: user.id }, secret, { expiresIn: "1h" });

  res.send({ token });
};
