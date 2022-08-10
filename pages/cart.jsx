import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import Layout from "../Components/Layout";
import { useDispatch, useSelector } from "react-redux";
const cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // const handlePlus = () => {
  //   cart.products.quantity += 1;
  // };
  // const handleMinus = () => {
  //   cart.products.quantity -= 1;
  // };
  const ongkos = 5000;
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Your Bag</h1>
          <div className={styles.top}>
            <button>Continue Shoping</button>
            <div className={styles.texts}>
              <span className={styles.text}>Shopping Bag (2)</span>
              <span className={styles.text}>Your Whistlist (0)</span>
            </div>
            <button>Checkout Now</button>
          </div>
          <div className={styles.bottom}>
            <div className={styles.info}>
              {cart.products.map((item, index) => (
                <div className={styles.product} key={index}>
                  <div className={styles.productDetail}>
                    <Image
                      src={item.image}
                      height="180px"
                      width="200px"
                      objectFit="contain"
                      alt={item.title}
                    />
                    <div className={styles.detail}>
                      <span className={styles.productTitle}>
                        <b>Product:</b> {item.title}
                      </span>
                      <span className={styles.productId}>
                        <b>ProductID:</b> {item._id}
                      </span>
                      <span className={styles.ekstra}>
                        <b>Tambahan:</b> Ekstra Keju
                      </span>
                    </div>
                  </div>
                  <div className={styles.priceDetail}>
                    <div className={styles.addContainer}>
                      <div className={styles.amountContainer}>
                        {/* <Remove
                          style={{ cursor: "pointer" }}
                          onClick={handleMinus}
                        /> */}
                        <p className={styles.count}>{item.quantity}</p>
                        {/* <Add
                          style={{ cursor: "pointer" }}
                          onClick={handlePlus}
                        /> */}
                      </div>
                    </div>
                    <span className={styles.price}>Rp {item.price},00</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.summary}>
              <h1>Your Total</h1>
              <div className={styles.summaryItem}>
                <span className={styles.sumText}>Sub Total</span>
                <span className={styles.sumPrice}>Rp {cart.total},00</span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.sumText}>Ongkos Kirim</span>
                <span className={styles.sumPrice}>Rp {ongkos},00</span>
              </div>
              <div className={styles.summaryTotal}>
                <span className={styles.sumText}>Total</span>
                <span className={styles.sumPrice}>
                  Rp {cart.total + ongkos},00
                </span>
              </div>
              <button>CHECKOUT NOW</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default cart;
