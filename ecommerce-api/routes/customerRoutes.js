const express = require("express");
const customerController = require("../controllers/customerController");

const router = express.Router();

router.get('/',customerController.getAllCustomers);
router.post('/',customerController.createCustomer);
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
