import { useEffect } from "react";
import httpService from "../../utils/service";

const ProductPage = () => {
  const fetchProducts = async () => {
    const response = await httpService.get("/product");
    console.log("response", response.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return <div>ProductPage</div>;
};

export default ProductPage;
