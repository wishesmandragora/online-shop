import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import { IoCartOutline, IoBagHandle } from "react-icons/io5";
import { Product } from "./types";


const products: Product[] = [
  {
    id: 1,
    title: "Summer Dress",
    image: "https://via.placeholder.com/150",
    category: "Dresses",
    price: 10,
  },
  {
    id: 2,
    title: "Denim jacket",
    image: "https://via.placeholder.com/150",
    category: "Jackets",
    price: 20,
  },
  {
    id: 3,
    title: "Black denim jeans",
    image: "https://via.placeholder.com/150",
    category: "Jeans and trousers",
    price: 30,
  },
  {
    id: 4,
    title: "Leather boots",
    image: "https://via.placeholder.com/150",
    category: "Shoes",
    price: 40,
  },
];

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const URL = 'https://swapi.dev/api/people/1';

  fetch(URL).then((data) => {
    return data.json();
  }).then((data) => console.log(data))

  // const result = await fetch(URL);
  // console.log(result);

  const handleAddToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <>
      <header className="header container">
        <h1 className="header-title">Online Shop <IoBagHandle/></h1>
        <button className="add-to-cart-button" onClick={toggleIsCartOpen}>
          <IoCartOutline />
        </button>
        {isCartOpen && <Cart cart={cart} />}
        
      </header>
      <main className="main container">
        <ProductList products={products} onAddToCart={handleAddToCart} />
      </main>
    </>
  );
}

export default App;
