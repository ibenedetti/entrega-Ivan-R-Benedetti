import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from './page/Cart/Cart';
import CheckOut from './page/CheckOut/CheckOut'; 
import CartProvider from './Context/CartProvider';

function App() {
  return (
    <BrowserRouter>
      <CartProvider> {}
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} /> 
        </Routes>
        {}
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
