import { useState } from "react";
import CartProvider from "../../store/CartProvider";
import AvailableMeals from "../components/AvailableMeals";
import Cart from "../components/Cart";
import Header from "../components/Header";
import MealsSummary from "../components/MealsSummary";

const Home = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      <main>
        <CartProvider>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <Header onShowCart={showCartHandler} />
          <MealsSummary />
          <AvailableMeals />
        </CartProvider>
      </main>
    </>
  );
};

export default Home;
