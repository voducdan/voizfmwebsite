// import reduc
import { Provider } from "react-redux";
import store from "../../src/redux/store";

// import components
import Cart from "../../src/components/Payment/Cart";
import Cookies from "universal-cookie";

const CartPage = () => {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
};

export const getServerSideProps = (context) => {
  const cookies = new Cookies(context.req.headers.cookie);
  const token = cookies.get("token");

  if (token === "null" || token === "undefined") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default CartPage;
