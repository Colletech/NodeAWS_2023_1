import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../services/authService";

declare module "express-serve-static-core" {
  interface Request {
    user?: string;
  }
}

export const authHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader: string = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(401)
      .send({ message: "No se encuentra la autorizacion en la cabecera" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const user = verifyToken(token);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({message: "El token no es valido."})
  }
};
