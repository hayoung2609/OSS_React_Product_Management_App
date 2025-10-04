import styles from "./ProductForm.module.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import MyNavbar from "./MyNavbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductForm = ({ postProduct, getProducts }) => {
  const navigate = useNavigate();

  const initialState = {
    name: "",
    price: 0,
    amount: 0,
    image: "",
    dampingRate: 0.8,
    storage: "", // storage 추가
  };

  const [newProduct, setNewProduct] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postProduct(newProduct);
    await getProducts();
    navigate("/productlist");
    setNewProduct(initialState);
  };

  return (
    <div className={styles.container}>
      <MyNavbar />
      <section className={styles.productForm}>
        <div className={styles.formContainer}>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label className="text-white">Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter product name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-white">Product Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="0"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
                required
              />
            </Form.Group>

            {/* Storage 입력 추가 */}
            <Form.Group className="mb-4"> 
              <Form.Label className="text-white">Product Storage</Form.Label>
              <Form.Control
                type="text"
                placeholder="0"
                value={newProduct.storage}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, storage: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-white">Product Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="0"
                value={newProduct.amount}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    amount: Number(e.target.value),
                  })
                }
                required
              />
            </Form.Group>

            <Form.Label className="text-white" htmlFor="basic-url">
              Product Image
            </Form.Label>
            <InputGroup className="mb-4">
              <InputGroup.Text id="basic-addon3">
                https://example.com/
              </InputGroup.Text>
              <Form.Control
                id="basic-url"
                aria-describedby="basic-addon3"
                value={newProduct.url}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
                required
              />
            </InputGroup>
          </Form>
          <button type="submit" onClick={handleSubmit}>
            Save To New Product
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductForm;