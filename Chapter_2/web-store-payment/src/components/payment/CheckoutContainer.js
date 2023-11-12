import React, { useState } from "react";
import PaymentOptions from "./PaymentOptions";
import { paymentProcessing } from "../../services/paymentService";

const CheckoutContainer = ({ render }) => {
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

  return render({
    handlePaymentProviderSelect,
    setSelectedPaymentProvider,
    handleProcessOrder,
  });
};

export default CheckoutContainer;
