import * as express from "express";
import stripe from "stripe";
import {config as dotenvConfig} from "dotenv";

dotenvConfig();

const currentStripe = stripe(process.env.STRIPE_SECRET_KEY);

export const paymentRouter = express.Router();

// получаю дату с запроса stripe
paymentRouter.post('/', (req, res) => {
    const {token: {id: source}, amount} = req.body;
    const body = {
        // source: req.body.token.id,
        source,
        amount,
        currency: "usd"
    };

    currentStripe.charges.create(body, (stripeErr, stripeRes) => {
         if (stripeErr) {
             res.status(500).send({error: stripeErr})
         } else {
             res.status(200).send({ success: stripeRes })
         }
    });
});


