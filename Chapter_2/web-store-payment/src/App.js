import CheckoutContainer from "./components/payment/CheckoutContainer";
import PaymentOptions from "./components/payment/PaymentOptions";

function App() {
  return (
    <div>
      <CheckoutContainer render={(args) => <PaymentOptions {...args} />} />
    </div>
  );
}

export default App;
