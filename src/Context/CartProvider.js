import { useEffect , useState } from "react";
import { CartContext} from "./CartContext";



const CartProvider = ({ children }) => {  
    const [products, setProducts] = useState([]);
    const [productQuantity, setProductQuantity] = useState(0);  

    const additem = (product, quantity) => {
        console.log(quantity);
        setProducts([
            ...products, 
            { 
                ...product, 
                quantity 
            }]);
        }

    const clear = () => {
        setProducts([]);
    }
    useEffect(() => {
        setProductQuantity(
            products.reduce((acc, product) => acc + product.quantity, 0)
        );
    }, [products]);
        
    return ( 
        <CartContext.Provider value={{products, additem, productQuantity , clear}}>
            {children}            
        </CartContext.Provider>
     );
}

export default CartProvider;