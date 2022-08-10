import axios from "axios";
import Layout from "../Components/Layout";
import Slider from "../Components/Slider";
import TopProduct from "../Components/TopProduct";
import Unnountcement from "../Components/Unnountcement";

export default function Home({ product }) {
  return (
    <Layout>
      <div>
        <Slider />
        <Unnountcement />
        <TopProduct product={product} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const response = await axios.get(
    "http://localhost:3000/api/product?skip=0&limit=4"
  );
  return {
    props: {
      product: response.data,
    },
  };
};
