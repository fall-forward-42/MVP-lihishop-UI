import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAddItemToCartMutation } from "../../features/carts/cartApiSlice";
import { constants } from "../../utils/constants";

const ProductCard = ({ product }) => {
  const defaultImage = constants.defaultImage;
  const [addItemToCartMutation, { isLoading }] = useAddItemToCartMutation();

  const handleAddToCartButtonClick = async () => {
    //handle post item to cart
    try {
      const postItemToCart = await addItemToCartMutation({
        quantity: 1,
        product:{
                id_product:product.id_product
        }
       
      }).unwrap();
      if (isLoading) {
        toast.info("Adding to cart...");
      }
      toast.success(product.name + " was in your cart.");
    } catch (error) {
      console.log(error);
      toast.error(error.data.message);
    }
  };
  return (
    <Card key={product.id} className="product-card">
      <CardMedia
        component="img"
        alt={product.name}
        height="200"
        image={product.image || defaultImage}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography color="textSecondary">{product.description}</Typography>
        <Typography>Price: {product.price}</Typography>
        <Typography>Stock: {product.stock}</Typography>
        <Typography>Expiry Date: {product.expiry_date}</Typography>
        <Typography>Unit: {product.unit}</Typography>
        <Typography>Brand: {product.brand}</Typography>
        <Typography>Weight: {product.weight}</Typography>
        <Typography>Origin: {product.origin}</Typography>
        <Typography>Created At: {product.createdAt}</Typography>
        <Typography>Updated At: {product.updatedAt}</Typography>
        <Typography>Category: {product.category.name}</Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleAddToCartButtonClick}
        >
          Add to Cart
        </Button>
      </CardContent>
      <ToastContainer />
    </Card>
  );
};

export default ProductCard;
