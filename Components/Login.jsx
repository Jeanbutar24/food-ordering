import styles from "../styles/Login.module.css";
import Link from "next/link";
import Image from "next/image";
const Login = () => {
  return (
    <div className={styles.container}>
      <h1>Login </h1>
      <div className={styles.username}>
        <Image src="/image/person.png" width="25px" height="25px" />
        <input type="text" placeholder="username" />
      </div>
      <div className={styles.password}>
        <Image src="/image/padlock.png" width="25px" height="25px" />
        <input type="password" placeholder="password" />
      </div>
      <button className={styles.button}>Login</button>
      <Link href="/register" passHref>
        <p className={styles.link}>silahkan, Register</p>
      </Link>
    </div>
  );
};

export default Login;
