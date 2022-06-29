import CartProvider from "../../store/CartProvider";
import AvailableMeals from "../components/AvailableMeals";
import Header from "../components/Header";
import MealsSummary from "../components/MealsSummary";

const Home = () => {
  return (
    <>
      <main>
        <CartProvider>
          <Header />
          <MealsSummary />
          <AvailableMeals />
        </CartProvider>
      </main>
    </>
  );
};

export default Home;
