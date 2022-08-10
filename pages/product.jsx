import Categories from "../Components/Categories";
import Products from "../Components/Products";
import axios from "axios";
import Layout from "../Components/Layout";
const Product = ({ product }) => {
  return (
    <Layout>
      <div>
        <Categories />
        <Products product={product} />
      </div>
    </Layout>
  );
};

export default Product;
export const getServerSideProps = async () => {
  const response = await axios.get("http://localhost:3000/api/product");
  return {
    props: {
      product: response.data,
    },
  };
};
