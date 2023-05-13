const customerService = require("../services/customerService");
const customerSchema = require("../schema/customerSchema");

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
    const { error, value } = customerSchema.validate(req.body);

    if (error) {
      return res.status(400).send(error.details);
    }

    const { name, email, phone } = value;

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

async function getCustomerById(req, res, next) {
  try {
    const id = req.params.id;
    const customer = await customerService.getCustomerById(id);
    res.send(customer);
  } catch (error) {
    next(error);
  }
}

async function updateCustomer(req, res, next) {
  try {
    const id = req.params.id;

    const { error, value } = customerSchema.validate(req.body);

    if (error) {
      return res.status(400).send(error.details);
    }

    const { name, email, phone } = value;

    const customer = await customerService.updateCustomer(id, {
      name,
      email,
      phone,
    });

    res.send(customer);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllCustomers,
  createCustomer,
  deleteCustomer,
  getCustomerById,
  updateCustomer,
};
