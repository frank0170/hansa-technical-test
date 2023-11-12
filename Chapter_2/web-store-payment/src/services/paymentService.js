const paymentProcessing = (paymentProvider, orderTotal) => {
  switch (paymentProvider) {
    case "Stripe":
      alert(`Processing payment using Stripe for order, total: ${orderTotal}$`);
      break;
    case "Braintree":
      alert(
        `Processing payment using Braintree for order, total: ${orderTotal}$`
      );
      break;
    case "PayPal":
      alert(`Processing payment using PayPal for order, total: ${orderTotal}$`);
      break;
    default:
      alert("Invalid payment provider");
  }
};

export { paymentProcessing };
