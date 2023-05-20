import express from "express";
import {
  getAllCustomer,
  createCustomer,
} from "../controllers/customerController";
import { authHandler } from "../middlewares/authHandler";

const router = express.Router();

router.get("/customers", authHandler, getAllCustomer);
router.post("/customers", createCustomer);

export default router;
