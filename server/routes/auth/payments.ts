import express from "express";
import { createPaymentIntent } from "../../controllers/auth/create-payment-intent";
export const authPaymentsRoute = express.Router();

authPaymentsRoute.post("/create-payment-intent", createPaymentIntent)
