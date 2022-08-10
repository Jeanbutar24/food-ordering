import Image from "next/image";
import styles from "../styles/Products.module.css";
import axios from "axios";
import Link from "next/link";
// const product = [
//   {
//     id: 1,
//     img: "/image/bayam.png",
//     title: "Bayam",
//     harga: "Rp5.000,00",
//     kategory: "Sayur",
//   },
//   {
//     id: 2,
//     img: "/image/cabaihijau.png",
//     title: "Cabai Hijau",
//     harga: "Rp43.000,00",
//     kategory: "Sayur",
//   },
//   {
//     id: 3,
//     img: "/image/jusjeruk.png",
//     title: "Jus Jeruk",
//     harga: "Rp10.000,00",
//     kategory: "Jus",
//   },
//   {
//     id: 4,
//     img: "/image/nanas.png",
//     title: "Nanas",
//     harga: "Rp5.000,00",
//     kategory: "Buah",
//   },
//   {
//     id: 5,
//     img: "/image/saladlengkap.png",
//     title: "Salad Lengkap",
//     harga: "Rp15.000,00",
//     kategory: "Salad",
//   },
//   {
//     id: 6,
//     img: "/image/jusstroberi.png",
//     title: "Jus Strowberi",
//     harga: "Rp15.000,00",
//     kategory: "Jus",
//   },
//   {
//     id: 7,
//     img: "/image/saladGuacumolo.png",
//     title: "Salad Guacumolo",
//     harga: "Rp25.000,00",
//     kategory: "Salad",
//   },
//   {
//     id: 8,
//     img: "/image/brokolipizza.png",
//     title: "Broccoli Pizza",
//     harga: "Rp32.000,00",
//     kategory: "Pizza",
//   },
// ];

const Products = ({ product }) => {
  return (
    <div className={styles.bigcontainer}>
      <div className={styles.wrapperContainer}>
        {product.map((item, index) => (
          <div className={styles.container} key={index}>
            <Image
              src={item.image}
              width="180px"
              height="230px"
              className={styles.img}
            />
            <p className={styles.harga}>Rp {item.price},00</p>
            <Link href={`/product/${item._id}`} passHref>
              <h2 className={styles.title}>{item.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
