// import { useState, useEffect } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from "./configFirebase";


// const ClientFactory = () => {

    

//     const [product, setProducts] = useState([])

//     useEffect(() => {
//         const products = doc(db, 'items', '1oXusYUYmRUS6V7Y2jar');
//         getDoc(products).then((snapshot) => {
//            if (snapshot.exists()) {
//                setProducts({ id: snapshot.id, ...snapshot.data() });
//            }
//         });
//     }, []);

//   return (
//     product
//   )
// }

// export default ClientFactory

import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "./configFirebase";

const ClientFactory = () => {
    const [product, setProducts] = useState({});

    useEffect(() => {
        const productsDoc = doc(db, 'items', '1oXusYUYmRUS6V7Y2jar');
        getDoc(productsDoc).then((snapshot) => {
            if (snapshot.exists()) {
                setProducts({ id: snapshot.id, ...snapshot.data() });
            }
        });
    }, []);

    return product;
}

export default ClientFactory;
