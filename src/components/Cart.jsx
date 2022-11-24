import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  IconButton,
  Stack,
  CardMedia,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ff8100",
  fontFamily: "unset",
  color: "#fff",
  fontWeight: 400,
  "&:hover": {
    backgroundColor: "#ff8100",
    color: "#fff",
  },
}));

const Cart = ({ setCartItemsCount }) => {
  const state = useSelector((state) => state.handleCart);
  const authToken = localStorage.getItem("token");
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <Card sx={{ minWidth: 275, padding: 0 }} elevation={0}>
        <CardMedia
          component="img"
          height="250"
          image="./assets/cart_empty.png"
          alt="Card"
          sx={{ padding: "1rem 0" }}
        />
        <CardContent>
          <Stack direction="column" sx={{ maxWidth: 250 }}>
            <Typography fontFamily="unset" variant="h6" textAlign="center">
              Your Cart is Empty
            </Typography>
            <Typography
              fontFamily="unset"
              variant="body2"
              textAlign="center"
              sx={{ color: "#51585e" }}
            >
              Looks like your haven't made your menu yet.
            </Typography>
          </Stack>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "1.5rem",
            }}
          >
            <Button
              component={Link}
              to="/product"
              size="normal"
              sx={{
                backgroundColor: "#0d6efd",
                color: "#fff",
                fontFamily: "unset",
                padding: "12px 5px",
              }}
            >
              <ArrowBackIcon /> Continue Shopping
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };
  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    setCartItemsCount(state.length);
    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-12">
                <div className="card mb-4">
                  <div className="card-body">
                    {state.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="row d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                              <div
                                className="bg-image rounded"
                                data-mdb-ripple-color="light"
                              >
                                <img
                                  src={item.image}
                                  // className="w-100"
                                  alt={item.title}
                                  width={100}
                                  height={75}
                                />
                              </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                              <p>{item.title.substring(0, 32)}...</p>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <Box
                                sx={{ display: "flex", maxWidth: "300px" }}
                                mb={2}
                              >
                                <Stack direction="row">
                                  <IconButton
                                    className="btn px-3"
                                    onClick={() => {
                                      removeItem(item);
                                    }}
                                  >
                                    <RemoveIcon />
                                  </IconButton>
                                  <h5 style={{ margin: 0, paddingTop: 5 }}>
                                    {item.qty}
                                  </h5>
                                  <IconButton
                                    className="btn px-3"
                                    onClick={() => {
                                      addItem(item);
                                    }}
                                  >
                                    <AddIcon />
                                  </IconButton>
                                </Stack>
                              </Box>
                              <p className="text-start text-md-center">
                                <strong>
                                  <span className="text-muted">{item.qty}</span>{" "}
                                  x ${item.price}
                                </strong>
                              </p>
                            </div>
                          </div>
                          <hr className="my-4" />
                        </div>
                      );
                    })}
                    <Typography textAlign="center" margin="1rem 0">
                      Subtotal ={" "}
                      <span style={{ color: "red", fontWeight: "600" }}>
                        ${Math.round(subtotal)}
                      </span>
                    </Typography>
                    <Stack direction={{xs:'column', md: 'row'}} sx={{marginBottom: '20px'}} justifyContent="space-around">
                      <StyledButton component={Link} to="/checkout">
                        Go to checkout
                      </StyledButton>
                      <Button
                        component={Link}
                        to="/product"
                        // size="normal"
                        sx={{
                          backgroundColor: "#0d6efd",
                          color: "#fff",
                          fontFamily: "unset",
                          // width: {xs: '320px', md: '50px'}
                        }}
                      >
                        <ArrowBackIcon /> Continue Shopping
                      </Button>
                    </Stack>
                    <Box sx={{display:'flex', justifyContent: 'center'}}>
                    <img 
                      src="./assets/image-asset.jpeg"
                      alt="card"
                      height={40}
                      mt={5}
                      />
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      {/* {!authToken ? 
      <>
      <Box p={5}>
        <ProductionQuantityLimitsIcon sx={{fontSize: "8rem"}} />
      </Box>
      </>
      : */}
      {/* <> */}
      <div className="container my-3">
        {/* <button onClick={handleClick}>Close</button> */}
        {/* <Typography variant="h4" textAlign='center' fontFamily="monospace" fontWeight={400}>Cart</Typography>
        <hr /> */}
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      {/* </> */}
      {/* // } */}
    </>
  );
};

export default Cart;
