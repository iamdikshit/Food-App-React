import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Meal from "./Component/Meal/Meal";
import CartContextProvider from "./Component/Store/ContextProvider";
function App() {
  return (
    <CartContextProvider>
      <main>
        <Header />
        <Hero />
        <Meal />
      </main>
    </CartContextProvider>
  );
}

export default App;
