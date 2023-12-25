import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import firestore from "../../config/configFirebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [fetchError, setFetchError] = useState("");
  const { id: itemId } = useParams();

  useEffect(() => {
    // Splitting the itemId to get only the item ID
    const itemIdParts = itemId.split("/");
    const actualItemId = itemIdParts[itemIdParts.length - 1];

    const docRef = doc(firestore, "products", actualItemId);

    getDoc(docRef)
      .then((res) => {
        const data = res.data();
        if (!data) {
          throw new Error("No data found");
        }
        const productsAdapted = { id: res.id, ...data };
        setProduct(productsAdapted);
      })
      .catch((error) => {
        console.error(error);
        setFetchError(error);
      });
  }, [itemId]);

  return (
    <>
      <div className="container">
        {fetchError ? (
          <h2>Error: {fetchError.message}</h2>
        ) : !product ? (
          <Loading />
        ) : (
          <ItemDetail {...product} />
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;