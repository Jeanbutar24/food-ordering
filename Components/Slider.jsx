import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import styles from "../styles/Slider.module.css";
import { useState } from "react";
const data = [
  {
    img: "/image/brokolipizza.png",
    title: "Brokoli Pizza",
  },
  {
    img: "/image/saladlengkap.png",
    title: "Salad Lengkap",
  },
  {
    img: "/image/burgerVegan.png",
    title: "Burger Vegan",
  },
];
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <KeyboardArrowLeftOutlined onClick={() => handleClick("left")} />
      </div>
      <div className={styles.wrapper}>
        {data.map((item, index) => (
          <div
            className={styles.slideContainer}
            key={index}
            style={{ transform: `translateX(${-100 * slideIndex}vw)` }}>
            <div className={styles.image}>
              <Image
                src={item.img}
                width="400px"
                height="600px"
                objectFit="contain"
              />
            </div>
            <div className={styles.info}>
              <h1>{item.title}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perferendis, aliquam.
              </p>
              <button>Buy Me</button>
            </div>
          </div>
        ))}
        <div className={styles.right}>
          <KeyboardArrowRightOutlined onClick={() => handleClick("right")} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
