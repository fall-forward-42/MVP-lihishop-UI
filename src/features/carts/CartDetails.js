import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import {
  useGetcartOfCurrUserQuery,
  useSubmitcartToOrderQuery
} from "./cartApiSlice";
import MainContainer from "../../components/MainContainer";
import Loading from "../../components/animation/Loading";
import ItemCard from "../../components/carts/ItemCard";
import { ShoppingCart } from "@material-ui/icons";
import { ToastContainer, toast } from "react-toastify";

const CartDetails = () => {
  const {
    data: cartItems,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetcartOfCurrUserQuery();

  //submit cart to order
  const {mutate:  submitcartToOrder,isLoading : isSubmitCartLoading} = useSubmitcartToOrderQuery();
  const navigate = useNavigate();

  const handleSubmitCartToOrder = async () => {
    navigate("/orders");
    await submitcartToOrder();
    if (isSubmitCartLoading) {
      toast.loading("Order loading....");
    }
    navigate("/orders");
    toast.success("Order submitted successfully");

  };

  const headerDiv = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  };
  let content;
  if (isLoading) {
    content = <Loading></Loading>;
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  } 
  else if (isSuccess) {
    content = (
      <MainContainer>
        <div style={headerDiv}>
          <h1>Items of cart</h1>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmitCartToOrder}
          >
            <ShoppingCart />
            Go to order now !
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Product </TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Weight</TableCell>
                <TableCell>Origin</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item) => (
                <ItemCard key={item.id_cart_item} item={item} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ToastContainer />
      </MainContainer>
    );
  }

  return content;
};

export default CartDetails;
