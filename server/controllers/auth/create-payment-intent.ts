import { Request, Response } from "express";
import { stripe } from '../../config/stripe';
export const createPaymentIntent = async (req: Request, res: Response) => {
    const { amount } = req.body;
    try {
        if (!amount) {
            res.status(400).json({ message: "Amount is required", status: false, status_code: 400 });
            return;
        } else {
            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency: "inr",
            });
            res.status(200).json({ message: "Payment intent created", paymentIntent, status: true, status_code: 200 });
            return;
        }
    } catch (error) {
        res.status(500).json({ message: "Payment intent creation failed", error, status: false, status_code: 500 });
        return;
    }
};