import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import styles from "./ProductList.module.css";
import MyNavbar from "../components/MyNavbar";
import TotalCard from "../components/TotalCard";

const url = "https://68db330d23ebc87faa323af3.mockapi.io/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data } = await axios.get(url);
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = async (id) => {
    await axios.delete(`${url}/${id}`);
    getProducts();
  };

  const putProduct = async (updatedProduct) => {
    await axios.put(`${url}/${updatedProduct.id}`, updatedProduct);
    getProducts();
  };

  return (
    <div className={styles.container}>
      <MyNavbar />
      <div className={styles.wrapper}>
        <div className={styles.cards}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              putProduct={putProduct}
              deleteProduct={deleteProduct}
            />
          ))}
        </div>
        <TotalCard products={products} className={styles.totalCard} />
      </div>
    </div>
  );
};

export default ProductList;
