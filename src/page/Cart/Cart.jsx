import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import Item from '../../components/Item/Item';
import Loading from '../../components/Loading/Loading';
import './styles.css';

const Cart = () => {
    const { products, clear } = useContext(CartContext);

    return (
        <div>
            <h1>Carrito</h1>
            <button onClick={() => clear()}>
                Vaciar Carrito
            </button>

            {products.length > 0 ? (
                <div>
                    {Loading ? (
                        <Loading />
                    ) : (
                        products.map((item) => (
                            <Item
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        ))
                    )}
                </div>
            ) : (
                <h2>No hay productos en el carrito</h2>
            )}
        </div>
    );
};

export default Cart;
