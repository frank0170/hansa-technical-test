import React, { useState } from "react";
import PaymentOptions from "./PaymentOptions";
import { paymentProcessing } from "../../services/paymentService";

const CheckoutContainer = () => {
  const [selectedPaymentProvider, setSelectedPaymentProvider] = useState(null);

  const handlePaymentProviderSelect = (provider) => {
    setSelectedPaymentProvider(provider);
  };

  const handleProcessOrder = (orderTotal) => {
    if (selectedPaymentProvider) {
      paymentProcessing(selectedPaymentProvider, orderTotal);
    } else {
      alert("Please select a payment provider before processing the order.");
    }
  };

  return (
    <div style={{ padding: "15px" }}>
      <h1>Checkout Page</h1>
      <PaymentOptions
        onSelectPaymentProvider={handlePaymentProviderSelect}
        selectedProvider={selectedPaymentProvider}
        handleProcessOrder={handleProcessOrder}
      />
    </div>
  );
};

export default CheckoutContainer;
