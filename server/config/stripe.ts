import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
const STRIPE_SECRET_KEY: string = process.env.STRIPE_SECRET_KEY || "";

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: "2024-06-20",
})