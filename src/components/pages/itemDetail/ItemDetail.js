import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products  from "../../../products"

const ItemDetail = () => {
  const { id } = useParams(); 

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productSelected = products.find((el) => el.id === +id);
    setProduct(productSelected);
  }, [id]);

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt="" />
    </div>
  );
};

export default ItemDetail;