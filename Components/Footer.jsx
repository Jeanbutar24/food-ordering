import styles from "../styles/Footer.module.css";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.logo}>Vegan Food</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          ipsum dolorum voluptates, sit et ducimus quisquam magnam eveniet eaque
          quo.
        </p>
        <div className={styles.sosialcont}>
          <div className={styles.icon}>
            <Facebook />
          </div>
          <div className={styles.icon}>
            <Instagram />
          </div>
          <div className={styles.icon}>
            <Twitter />
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <h3 className={styles.lp}>Layanan Pelanggan</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Tentang Kami</li>
          <li className={styles.listItem}>Kebijakan Privasi</li>
          <li className={styles.listItem}>Metode Pembayaran</li>
          <li className={styles.listItem}>Pesanan Pembeli</li>
          <li className={styles.listItem}>Pengiriman Penjual</li>
          <li className={styles.listItem}>Pengembalian Barang & Dana</li>
          <li className={styles.listItem}>Hubungi Kami</li>
          <li className={styles.listItem}>Kontak Media</li>
        </ul>
      </div>
      <div className={styles.right}>
        <h3 className={styles.contact}>Contact</h3>
        <div className={styles.contactItem}>
          <Room style={{ marginRight: "10px" }} /> jln.Kp Ciburial No 59,
          kec.Padalarang, kab.Bandung Barat, Kota Bandung
        </div>
        <div className={styles.contactItem}>
          <Phone style={{ marginRight: "10px" }} /> +62 818 09246939
        </div>
        <div className={styles.contactItem}>
          <MailOutline style={{ marginRight: "10px" }} /> jeanbutar24@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
