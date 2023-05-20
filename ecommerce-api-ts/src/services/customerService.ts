import { AppDataSource } from "../data-source";
import { Customer } from "../entity/Customer";

const customerRepository = AppDataSource.getMongoRepository(Customer);

export const getAllCustomers = async (): Promise<Customer[]> => {
  const allCustomers = await customerRepository.find();

  return allCustomers;
};

export const create = async ({ name, email, phone }): Promise<Customer> => {
  const customer = new Customer();
  customer.name = name;
  customer.email = email;
  customer.phone = phone;

  await customerRepository.save(customer);
  return customer;
};
