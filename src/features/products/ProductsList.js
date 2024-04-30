import HeaderBar from "../../components/HeaderBar";
import MainContainer from "../../components/MainContainer";
import Loading from "../../components/animation/Loading";
import Categories from "../../components/categories/Categories";
import ProductCard from "../../components/products/ProductCard ";
import { useGetCategoriesQuery, useGetProductsQuery } from "./productsApiSlice";
import { Grid } from "@material-ui/core";
const ProductsList = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();

  let content;
  if (isLoading) {
    content = <Loading></Loading>;
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  } else if (isSuccess) {
    content = (
      <div>
        <HeaderBar></HeaderBar>
        <MainContainer className="products">
          <h1>Products List</h1>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4}>
                <ProductCard product={product}  key={product.id_product}> </ProductCard>
              </Grid>
            ))}
          </Grid>
        </MainContainer>
      </div>
    );
  }

  return content;
};
export default ProductsList;
