const customerService = require("../services/customerService");

async function getAllCustomers(req, res, next) {
    try {
        const customers = await customerService.getCustomers();
        res.send(customers);
    } catch(error) {
        next(error)
    }
}