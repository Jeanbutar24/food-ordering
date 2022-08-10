import styles from "../styles/Register.module.css";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Register</h1>
        <div className={styles.inputData}>
          <Image src="/image/name-card.png" width="25px" height="25px" />
          <input type="text" placeholder="Fullname" />
        </div>
        <div className={styles.inputData}>
          <Image src="/image/person.png" width="25px" height="25px" />
          <input type="text" placeholder="Username" />
        </div>
        <div className={styles.inputData}>
          <Image src="/image/email.png" width="25px" height="25px" />
          <input type="text" placeholder="Email" />
        </div>
        <div className={styles.inputData}>
          <Image src="/image/padlock.png" width="25px" height="25px" />
          <input type="password" placeholder="Password" />
        </div>
        <div className={styles.inputData}>
          <Image src="/image/padlock.png" width="25px" height="25px" />
          <input type="password" placeholder="Confirm Password" />
        </div>
        <button className={styles.button}>Register</button>
        <Link href="/" passHref>
          <p className={styles.link}>silahkan, Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
