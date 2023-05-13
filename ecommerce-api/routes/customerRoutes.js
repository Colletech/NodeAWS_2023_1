const express = require("express");
const customerController = require("../controllers/customerController");
const authHandler = require("../middlewares/authHandler");

const router = express.Router();

router.get("/", authHandler, customerController.getAllCustomers);
router.post("/", authHandler, customerController.createCustomer);
router.delete("/:id", authHandler, customerController.deleteCustomer);
router.get("/:id",  customerController.getCustomerById);
router.put("/:id", authHandler, customerController.updateCustomer);

module.exports = router;
