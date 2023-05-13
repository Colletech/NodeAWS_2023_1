const customerService = require("../services/customerService");

async function getAllCustomers(req, res, next) {
  try {
    const customers = await customerService.getAllCustomers();
    res.send(customers);
  } catch (error) {
    next(error);
  }
}

async function createCustomer(req, res, next) {
  try {
    const { name, email, phone } = req.body;
    const newCustomer = await customerService.createCustomer({
      name,
      email,
      phone,
    });
    res.send(newCustomer);
  } catch (error) {
    next(error);
  }
}

async function deleteCustomer(req, res, next) {
  try {
    const id = req.params.id;
    const customer = await customerService.deleteCustomer(id);
    res.send(customer);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllCustomers,
  createCustomer,
  deleteCustomer,
};
