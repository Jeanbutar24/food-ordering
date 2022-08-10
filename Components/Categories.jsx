import styles from "../styles/Categories.module.css";
const categories = [
  {
    id: 1,
    title: "SAYUR",
  },
  {
    id: 2,
    title: "SALAD",
  },
  {
    id: 3,
    title: "KEJU NABATI",
  },
  {
    id: 4,
    title: "PIZZA",
  },
  {
    id: 5,
    title: "JUS",
  },
  {
    id: 6,
    title: "OBAT ALAMI",
  },
  {
    id: 7,
    title: "BUAH",
  },
];
const Categories = () => {
  return (
    <div className={styles.bigcontainer}>
      {categories.map((item, index) => (
        <div className={styles.container} key={index}>
          <div className={styles.wrapper}>
            <h2 className={styles.category}>{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
