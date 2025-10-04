import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product, putProduct, deleteProduct }) => {
  const { name, price, amount, id, image, storage, dampingRate } = product;

  const navigate = useNavigate();

  // dampingRate 적용가 계산.
  const finalPrice = (price * dampingRate).toFixed(2);
  const hasDiscount = dampingRate < 1; // 할인 여부를 확인

  const handleMinus = async () => {
    if (amount > 1) {
      await putProduct({ ...product, amount: Number(amount - 1) });
    } else {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this item?"
      );
      if (confirmDelete) {
        deleteProduct(id);
      }
    }
  };

  const handlePlus = async () => {
    await putProduct({ ...product, amount: Number(amount + 1) });
  };

  const handleRemove = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      deleteProduct(id);
    }
  };

  return (
    <div className={styles.cardContainer}>
      <img
        onClick={() => navigate("/UpdateProduct", { state: product })}
        src={image}
        alt="productImage"
      />
      <div className={styles.productInfo}>
        <h3>{name}</h3>

        <p className={styles.storage}>{storage}</p>
        <div className={styles.priceContainer}>
          {hasDiscount && (
            <p className={styles.originalPrice}>{price}</p>
          )}
          <p className={styles.finalPrice}>{finalPrice}</p>
        </div>

        <div className={styles.amountContainer}>
          <button onClick={handleMinus}>-</button>
          <p>{Number(amount)}</p>
          <button onClick={handlePlus}>+</button>
        </div>
        <button className={styles.remove} onClick={handleRemove}>
          REMOVE
        </button>
        <p className={styles.total}>Product Total: {(amount * finalPrice).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
