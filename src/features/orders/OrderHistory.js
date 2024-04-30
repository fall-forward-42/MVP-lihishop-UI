import React from "react";
import { useGetOrderByCurrUserQuery } from "./orderApiSlice";
import Loading from "../../components/animation/Loading";
import { Grid } from "@material-ui/core";
import MainContainer from "../../components/MainContainer";
import OrderItem from "../../components/orders/OrderItem";

import { ToastContainer } from "react-toastify";
const OrderHistory = () => {

  const {
    data: orders,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetOrderByCurrUserQuery();

  let content;
  if (isLoading) {
    content = <Loading></Loading>;
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  } else if (isSuccess) {
    content = (
      <MainContainer className="orders">
        <h1>Order History</h1>
        <div className="">
        <a href="/cart">Return to cart</a>
        </div>
        <div>
        <a href="/products">Return Products</a>
        </div>
        
        <Grid container spacing={2}>
          {orders.map((order) => (
            <Grid item xs={12} sm={6} md={4} key={order.id_order}>
              <OrderItem order={order}></OrderItem>
            </Grid>
          ))}
        </Grid>
        <ToastContainer />
      </MainContainer>
    );
  }
  return content;
};

export default OrderHistory;
