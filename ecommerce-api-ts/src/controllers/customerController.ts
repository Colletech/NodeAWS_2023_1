import { Request, Response } from "express";
import { getAllCustomers, create } from "../services/customerService";

export const getAllCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  const customers = await getAllCustomers();

  res.send(customers);
};

export const createCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, email, phone } = req.body;

  const customer = await create({ name, email, phone });
  res.send(customer);
};
