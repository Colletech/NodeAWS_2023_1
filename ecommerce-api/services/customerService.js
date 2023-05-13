const { default: mongoose } = require("mongoose");
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
    const customer = await getById(id);
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
  try {
    const customer = await getById(id);
    if (!customer) {
      throw new Error("Cliente no encontrado");
    }
    return customer;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateCustomer(id, customerData) {
  const customer = await getById(id);
  if (!customer) {
    throw new Error("Cliente no encontrado");
  }
  Object.assign(customer, customerData);
  await customer.save();
  return customer;
}

async function getById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("ID invalido");
  }

  const customer = await Customer.findById(id);

  return customer;
}

module.exports = {
  getAllCustomers,
  createCustomer,
  deleteCustomer,
  getCustomerById,
  updateCustomer,
};
