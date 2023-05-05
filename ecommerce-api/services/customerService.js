const Customer = require("../models/Customer");

class CustomerService {
    async getCustomers() {
        const customers = await Customer.find();
        return customers;
    }
}

module.exports = CustomerService;