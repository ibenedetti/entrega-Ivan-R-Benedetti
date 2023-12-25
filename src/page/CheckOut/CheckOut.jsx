import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import firestore from '../../config/configFirebase';
import { CartContext } from '../../Context/CartProvider';
import Loading from '../../components/Loading/Loading';

const CheckOut = () => {
  const { products, clear } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' });
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Products in CheckOut:', products);
  }, [products]);

  const calculateTotal = () => {
    if (!products || products.length === 0) {
      return { subTotal: 0, taxes: 0, total: 0 };
    }

    const subTotal = products.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const taxes = subTotal * 0.21;
    const total = subTotal + taxes;

    return { subTotal, taxes, total };
  };

  const { subTotal, taxes, total } = calculateTotal();

  const handleOrder = async () => {
    try {
      setLoading(true);

      // ENVIAR ORDEN AL FIRESTORE
      const orderData = {
        buyer,
        email: buyer.email,
        date: serverTimestamp(),
        items: products.map(item => ({
          id: item.id,
          price: item.price,
          quantity: item.quantity,
          title: item.title,
        })),
        total,
      };

      const ordersCollection = collection(firestore, 'orders');
      await addDoc(ordersCollection, orderData);

      // LIMPIAR EL CARRITO
      clear();

      setLoading(false);

      // REDIRIGIR A LA PÁGINA DE AGRADECIMIENTO
      navigate('/ThankYou');
    } catch (error) {
      console.error('Error al procesar la orden:', error);
      setLoading(false); 
    }
  };

  const handleInputChange = (e, field) => {
    setBuyer({ ...buyer, [field]: e.target.value });
  };

  return (
    <div>
      <h2>Resumen de Compra</h2>

      <div>
        <h3>Productos en el Carrito</h3>

        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>${item.quantity * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3>Total</h3>
        <p>Subtotal: ${subTotal}</p>
        <p>Impuestos (21%): ${taxes}</p>
        <p>Total a Pagar: ${total}</p>
      </div>

      <div>
        <input
          type="text"
          placeholder="Nombre"
          value={buyer.name}
          onChange={(e) => handleInputChange(e, 'name')}
        />
        <input
          type="text"
          placeholder="Email"
          value={buyer.email}
          onChange={(e) => handleInputChange(e, 'email')}
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={(e) => handleInputChange(e, 'phone')}
        />
      </div>

      <div>
        <Link to={"/"}>Seguir Comprando</Link>
        <button onClick={handleOrder}>Realizar Compra</button>
      </div>

      {isLoading && <Loading />}
    </div>
  );
};

export default CheckOut;
