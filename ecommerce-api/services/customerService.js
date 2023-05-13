const Customer = require("../models/Customer");

async function getAllCustomers() {
  const customers = await Customer.find();
  return customers;
}

async function createCustomer(customerData) {
  const customer = new Customer(customerData);
  await customer.save();
  return customer;
}

async function deleteCustomer(id) {
  try {
    const customer = await Customer.findById(id);
    if (!customer) {
      throw new Error("Cliente no encontrado");
    }
    await customer.deleteOne();
    return customer;
  } catch (error) {
    throw new Error(error);
  }
}

async function getCustomerById(id) {
  const customer = await Customer.findById(id);
  return customer;
}

async function updateCustomer(id, customerData){
  const customer = await Customer.findById(id);
  if(!customer) {
    throw new Error("Cliente no encontrado");
  }
  Object.assign(customer, customerData);
  await customer.save();
  return customer;
}


module.exports = {
  getAllCustomers,
  createCustomer,
  deleteCustomer,
  getCustomerById,
  updateCustomer,
};
