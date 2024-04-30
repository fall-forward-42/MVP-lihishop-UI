import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { useGetCategoriesQuery } from "../../features/categories/categoriesApiSlice";
import Loading from "../animation/Loading";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "inherit",
    position: "relative",
  },
  search: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
    color: "#fff",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: theme.spacing(1),
  },
}));




const Categories = () => {
  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCategoriesQuery();
 
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSearchChange = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log(searchTerm);
    } else {
      setSearchTerm(event.target.value);
    }
  };
  const handleSubmitSearchInput= (event)=>{
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents the default action
      console.log(searchTerm);
      // Add your submit event handler here
    }
  }

 
  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <SearchIcon />
        <InputBase
          color="#fff"
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleSubmitSearchInput}
        />
      </div>
      {isLoading ? <Loading></Loading> : (
        <div style={{ position: "relative" }}>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Categories" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          style={{ position: "absolute" }}
        >
          <List component="div" disablePadding>
            {categories
              .map((category) => (
                <ListItem
                  button
                  className={classes.nested}
                  key={category.id_cate}
                  style={{ backgroundColor: "#3f51b5" }}
                >
                  <ListItemText primary={category.name} />
                </ListItem>
              ))}
          </List>
        </Collapse>
      </div>
      ) }
    </div>
  );
};

export default Categories;
