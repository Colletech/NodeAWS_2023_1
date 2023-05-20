import express from "express";
import { getAllCustomer, createCustomer } from "../controllers/customerController";

const router = express.Router();

router.get("/customers", getAllCustomer);
router.post("/customers", createCustomer)

export default router;
