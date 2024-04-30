import React, { useState } from "react";
import {
  Button,
  TextField,
  TableCell,
  TableRow,
  IconButton 
} from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { constants } from "../../utils/constants";
import { Update, Delete } from "@material-ui/icons";

const ItemCard = ({ item }) => {
  const defaultImage = constants.defaultImage;
  const {
    product: {
      name,
      description,
      price,
      image,
      brand,
      weight,
      origin,
      category: { name: categoryName },
    },
  } = item;
  const [quantity, setQuantity] = useState(item.quantity);

  
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
    
  };
  const handleRemoveCart = () => {
    toast.info(`Remove ${name} successfully.`)

  }
  const handleQuantityChangeSubmit = () => {
    toast.success(`Update quantity for ${name} with ${quantity} successfully.`)
  }

  return (
    <TableRow>
      <TableCell>
        <img src={image || defaultImage} alt={name} height="100" />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>{brand}</TableCell>
      <TableCell>{weight}</TableCell>
      <TableCell>{origin}</TableCell>
      <TableCell>{categoryName}</TableCell>
      <TableCell>
        <TextField
          type="number"
          value={quantity}
          label="Quantity"
          onChange={handleQuantityChange}
        />
      </TableCell>
      <TableCell>
        <Button variant="contained" color="primary"  startIcon={<Update />} style={{ marginTop: '5px' }} onClick={handleQuantityChangeSubmit}>
          Update Quantity
        </Button>
        <Button variant="contained" color="secondary"  startIcon={<Delete />} style={{ marginTop: '5px' }} onClick={handleRemoveCart}>
          Remove from Cart
        </Button>
      </TableCell>
      <ToastContainer />
    </TableRow>
  );
};

export default ItemCard;
