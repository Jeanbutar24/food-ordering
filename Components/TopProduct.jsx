import Image from "next/image";
import styles from "../styles/TopProduct.module.css";
import { useState } from "react";
import Link from "next/link";
const TopProductList = [
  {
    title: "Brokoli Pizza",
    img: "/image/brokolipizza.png",
    rating: "4.5/5",
    price: "Rp.65.000,00",
  },
  {
    title: "Jus Jeruk",
    img: "/image/jusjeruk.png",
    rating: "4.5/5",
    price: "Rp.10.000,00",
  },
  {
    title: "Salad Buah",
    img: "/image/saladlengkap.png",
    rating: "4.5/5",
    price: "Rp.12.000,00",
  },
  {
    title: "Lalapan Sambal",
    img: "/image/lalapansambal.png",
    rating: "4.5/5",
    price: "Rp.30.000,00",
  },
];
const TopProduct = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}></div>
      {product.map((item, index) => (
        <div className={styles.content} key={index}>
          <div className={styles.image}>
            <Image
              src={item.image}
              className={styles.img}
              height="230px"
              width="180px"
            />
          </div>
          <div className={styles.info}>
            <p className={styles.price}>{item.price}</p>
            <span className={styles.rating}>{item.rating}</span>
            <Link href={`/product/${item._id}`} passHref>
              <h2 className={styles.title}>{item.title}</h2>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopProduct;
