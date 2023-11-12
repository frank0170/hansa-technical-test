import React from "react";
import { List, ListItemButton, ListItemText, Button } from "@mui/material";

const PaymentOptions = ({
  onSelectPaymentProvider,
  selectedProvider,
  handleProcessOrder,
}) => {
  const paymentProviders = ["Stripe", "Braintree", "PayPal"];

  return (
    <div style={{ padding: "15px" }}>
      <h1>Checkout Page</h1>

      <h2>Select Payment Provider:</h2>
      <List>
        {paymentProviders.map((provider) => (
          <ListItemButton
            key={provider}
            selected={selectedProvider === provider}
            onClick={() => onSelectPaymentProvider(provider)}
          >
            <ListItemText primary={provider} />
          </ListItemButton>
        ))}
      </List>

      <Button
        variant="contained"
        color="success"
        onClick={() => handleProcessOrder(100)}
        sx={{ marginTop: 2 }}
      >
        Process Payment
      </Button>
    </div>
  );
};

export default PaymentOptions;
