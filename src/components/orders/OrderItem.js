import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Collapse,
} from "@material-ui/core";
import {
  Assignment,
  Person,
  CalendarToday,
  AttachMoney,
  LocationOn,
  CheckCircle,
  ExpandMore,
} from "@material-ui/icons";
import { useGetDetailsOrderByOrderIdQuery } from "../../features/orders/orderApiSlice";
import OrderDetailsItem from "./OrderDetailsItem";
import Loading from "../animation/Loading";

const OrderItem = ({ order }) => {
  const {
    id_order,
    user: { fullName, address: userAddress },
    orderDate,
    toltalPrice,
    address: orderAddress,
    status,
  } = order;

  //handle show details of order
  const {
    data: orderDetailsItemsList,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDetailsOrderByOrderIdQuery(id_order);
  const [showDetails, setShowDetails] = useState(false);
  const handleShowDetailsOrder = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          <Assignment /> Order ID: {id_order}
        </Typography>

        <Typography>
          <Person />
          User: {fullName}
        </Typography>

        <Typography>
          <LocationOn />
          User Address: {userAddress}
        </Typography>
        <Typography>
          <CalendarToday /> Order Date: {new Date(orderDate).toLocaleString()}
        </Typography>

        <Typography>
          <AttachMoney />
          Total Price: ${toltalPrice}
        </Typography>

        <Typography>
          <LocationOn />
          Order Address: {orderAddress}
        </Typography>

        <Typography>
          <CheckCircle />
          Status: {status}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleShowDetailsOrder}
          startIcon={<ExpandMore />}
          style={{ marginTop: "12px" }}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </Button>
        <Collapse in={showDetails} timeout="auto" unmountOnExit>
          {isLoading ? (
            <Loading></Loading>
          ) : (
            <OrderDetailsItem orderDetailsItemList={orderDetailsItemsList} />
          )}
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default OrderItem;
