import { useContext } from "react";
// import { OrderContext } from "../context/OrderProvider";
// import formatPrice from "../composables/currencyFormatter";
// import { Link } from "react-router-dom";

const CheckOut = () => {
//   const { order } = useContext(OrderContext);
//   return (
//     <div>
//       <h2>Orden de Compra</h2>
//       <span># {order.id}</span>
//       <p>
//         Resumen enviado a: {order.buyer.email} <br />
//       </p>

//       <div>
//         <h3>Datos del Comprador</h3>
//         <p>
//           Nombre: {order.buyer.nombre} <br />
//           Teléfono: {order.buyer.telefono}
//         </p>
//       </div>

//       <div>
//         <h3>Compra</h3>

//         <table>
//           <thead>
//             <tr>
//               <th>Producto</th>
//               <th>Cantidad</th>
//               <th>Unitario</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {order.items.map((p) => (
//               <tr key={p.id} className="">
//                 <td>{p.title}</td>
//                 <td>{p.quantity}</td>
//                 <td>
//                   {formatPrice(p.price)}
//                 </td>
//                 <td>
//                   {formatPrice(p.quantity * p.price)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div>
//         <h3>Fecha de Compra</h3>
//         <p>{new Date(order.date).toLocaleString()}</p>
//       </div>

//       <div>
//         <h3>Total</h3>
//         <p>${order.total}</p>
//       </div>

//       {/* <p>
//         Gracias por elegir nuestra tienda. ¡Esperamos verte pronto!
//       </p> */}
//       <div>
//         <Link
//           to={"/"}          
//         >
//           Seguir Comprando
//         </Link>
//       </div>
//     </div>
//   );
};

export default CheckOut;
