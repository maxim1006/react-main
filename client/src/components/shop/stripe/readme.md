1. npm i react-stripe-checkout
2.

```js
<StripeCheckout
    label='Pay now'
    name='My Shop'
    stripeKey={publishKey}
    billingAddress
    shippingAddress
    description={`Your total price is $${price}`}
    amount={stripePrice}
    panelLabel='Pay now'
    token={onToken}
/>
```

### test

4242424242424242 Visa Any 3 digits Any future date
