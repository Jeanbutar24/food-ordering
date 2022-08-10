import Image from "next/image";
import styles from "../../styles/ProductId.module.css";
import { addProduct } from "../../redux/cartSlice";
import { useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import axios from "axios";
import Layout from "../../Components/Layout";
import { useDispatch } from "react-redux";
import Link from "next/link";

const ProductId = ({ productId }) => {
  const dispatch = useDispatch();

  const [quantity, setCount] = useState(1);
  const [prices, setPrice] = useState(productId.price[0]);
  // const [option, setOption] = useState([]);
  const handlePlus = () => {
    setCount(quantity + 1);
    setPrice(parseInt(price) + parseInt(productId.price[0]));
  };
  const handleMinus = () => {
    if (quantity > 1) {
      setCount(quantity - 1);
      if (price !== productId.price[0]) {
        setPrice(parseInt(prices) - parseInt(productId.price[0]));
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  const price = parseInt(prices);
  const handleClick = () => {
    dispatch(addProduct({ ...productId, quantity, price }));
  };
  return (
    <Layout title="Detail">
      <div className={styles.container}>
        <div className={styles.page}>
          <div className={styles.imgContainer}>
            <Image
              src={productId.image}
              width="420px"
              height="400px"
              objectFit="contain"
              alt={productId.title}
            />
          </div>
          <div className={styles.infoContainer}>
            <h1 className={styles.title}>{productId.title}</h1>
            <p className={styles.desc}>{productId.desc}</p>
            <span className={styles.price}>Rp {price},00</span>
            <div className={styles.filterContainer}>
              <div className={styles.filter}>
                <h2 style={{ marginRight: "10px" }}>Option</h2>
                <div className={styles.filterSize}>Extra Keju</div>
                <div className={styles.filterSize}>Extra Sosis</div>
                <div className={styles.filterSize}>Extra Size</div>
              </div>
            </div>
            <div className={styles.addContainer}>
              <div className={styles.amountContainer}>
                <Remove style={{ cursor: "pointer" }} onClick={handleMinus} />
                <p className={styles.count}>{quantity}</p>
                <Add style={{ cursor: "pointer" }} onClick={handlePlus} />
              </div>
              <Link href="/cart" passHref>
                <p className={styles.button}>Buy Now</p>
              </Link>

              <p className={styles.button} onClick={handleClick}>
                Add to cart
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductId;

export const getServerSideProps = async ({ params }) => {
  const response = await axios.get(
    `http://localhost:3000/api/product/${params.id}`
  );
  return {
    props: {
      productId: response.data,
    },
  };
};
