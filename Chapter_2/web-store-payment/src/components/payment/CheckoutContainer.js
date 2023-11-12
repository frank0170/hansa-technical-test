import { useState } from "react";
import { paymentProcessing } from "../../services/paymentService";
import PaymentOptions from "./PaymentOptions";

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

  return (
    <PaymentOptions
      handlePaymentProviderSelect={handlePaymentProviderSelect}
      selectedPaymentProvider={selectedPaymentProvider}
      handleProcessOrder={handleProcessOrder}
    />
  );
};

export default CheckoutContainer;
