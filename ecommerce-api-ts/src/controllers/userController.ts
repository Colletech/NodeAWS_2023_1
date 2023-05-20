import { Request, Response } from "express";
import { create } from "../services/userService";

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { username, password, email } = req.body;
  const user = await create({ username, password, email });
  res.send(user);
};
