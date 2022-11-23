import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import { Card, CardActions, CardContent, Typography, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = ( {setCartItemsCount}) => {
  const state = useSelector((state) => state.handleCart);
  const authToken = localStorage.getItem('token')
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <Card sx={{ minWidth: 275}} elevation = {0}>
        <CardContent sx={{ padding: 0 }}>
          <Typography variant="h4" gutterBottom>
            Your Cart is Empty
          </Typography>
          <CardActions>
          <Button size='normal' sx={{ backgroundColor:'#0d6efd', color: '#fff', fontFamily: 'monospace' }}>
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

    setCartItemsCount(state.length)
    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container" >
            <div className="row d-flex justify-content-center my-4" >
              <div className="col-md-12" >
                <div className="card mb-4" >
                  <div className="card-body">
                    {state.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="row d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                              <div
                                className="bg-image rounded"
                                data-mdb-ripple-color="light">
                                <img
                                  src={item.image}
                                  className="w-100"
                                  alt={item.title}
                                  width={100}
                                  height={75}
                                />
                              </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                              <p>
                                {item.title.substring(0, 32)}...
                              </p>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div
                                className="d-flex mb-4"
                                style={{ maxWidth: "300px" }}>
                                <button
                                  className="btn px-3"
                                  onClick={() => {
                                    removeItem(item);
                                  }}>
                                  <i className="fas fa-minus"></i>
                                </button>
                                <h5 style={{ margin: 0, paddingTop: 5 }}>{item.qty}</h5>
                                <button
                                  className="btn px-3"
                                  onClick={() => {
                                    addItem(item);
                                  }}>
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>
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
                    <Typography textAlign='center' margin="1rem 0">Subtotal = <span style={{color: 'red', fontWeight: '600'}}>${Math.round(subtotal)}</span></Typography>
                      <Button
                      component={Link}
                      to="/checkout"
                      fullWidth={true}
                      sx={{ background: '#00a524', color: '#fff' }}
                    >
                      Go to checkout
                    </Button>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products ({totalItems})<span>${Math.round(subtotal)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>${shipping}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>${Math.round(subtotal + shipping)}</strong>
                        </span>
                      </li>
                    </ul>
                    <Link
                      to="/checkout"
                      className="btn btn-dark btn-lg btn-block"
                    >
                      Go to checkout
                    </Link>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
    {!authToken ? 
      <>
      <Box p={5}>
        <ProductionQuantityLimitsIcon sx={{fontSize: "8rem"}} />
      </Box>
      </>
      :
      <>
      <div className="container my-3">
        {/* <button onClick={handleClick}>Close</button> */}
        {/* <Typography variant="h4" textAlign='center' fontFamily="monospace" fontWeight={400}>Cart</Typography>
        <hr /> */}
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      </>
    }
      
    </>
  );
};

export default Cart;
