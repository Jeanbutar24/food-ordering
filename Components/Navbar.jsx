import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link href={`/`} passHref>
          <span className={styles.title}>Vegan Food</span>
        </Link>
      </div>
      <div className={styles.center}>
        <div className={styles.category}>
          <ul>
            <li>
              <Link href={`/`} passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href={`/product`} passHref>
                Products
              </Link>
            </li>
            <li>
              <Link href={`/`} passHref>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Cari Sayuran..."
            className={styles.input}
          />
          <SearchOutlined className={styles.icon} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.forms}>
          <Link href={`/login`} passHref>
            <span className={styles.form}>Login</span>
          </Link>
          <Link href={`/register`} passHref>
            <span className={styles.form}>Register</span>
          </Link>
          <div className={styles.add}>
            <div className={styles.icon}>
              <Link href={`/cart`} passHref>
                <ShoppingCartOutlined />
              </Link>
            </div>
            {quantity > 0 ? <div className={styles.num}>{quantity}</div> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
