import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@material-ui/core';

const CartDetailsItem = ({ orderDetailsItemList }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderDetailsItemList.map((orderDetailsItem) =>
           (
            <TableRow key={orderDetailsItem.id_order_item}>
              <TableCell>{orderDetailsItem.product.name}</TableCell>
              <TableCell>{orderDetailsItem.product.category.name}</TableCell>
              <TableCell>${orderDetailsItem.price}</TableCell>
              <TableCell>{orderDetailsItem.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartDetailsItem;