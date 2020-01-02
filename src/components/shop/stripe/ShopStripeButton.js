import React, {memo, useCallback} from "react";
import StripeCheckout from 'react-stripe-checkout';
import {publishKey} from "../../../stripe/stripe.utils";

export default memo(({price}) => {
    const stripePrice = price * 100; // в страйп все цены в центах

    const onToken = useCallback((token) => {
        console.log(token);
        alert("Payment successful");
    }, []);

    return (
        <div className="shop-stripe-button">
            <StripeCheckout
                label="Pay now"
                name="My Shop"
                stripeKey={publishKey}
                billingAddress
                shippingAddress
                description={`Your total price is $${price}`}
                amount={stripePrice}
                panelLabel="Pay now"
                token={onToken}
            />
        </div>
    )
});
