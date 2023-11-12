import React from "react";
import { List, ListItem, ListItemText, Button } from "@mui/material";

const PaymentOptions = ({
  onSelectPaymentProvider,
  selectedProvider,
  handleProcessOrder,
}) => {
  const paymentProviders = ["Stripe", "Braintree", "PayPal"];

  return (
    <div>
      <h2>Select Payment Provider:</h2>
      <List>
        {paymentProviders.map((provider) => (
          <ListItem
            button
            key={provider}
            selected={selectedProvider === provider}
            onClick={() => onSelectPaymentProvider(provider)}
          >
            <ListItemText primary={provider} />
          </ListItem>
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
