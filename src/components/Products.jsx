import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Button, Box, Typography, Stack, Grid, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import { Container, padding, textTransform, width } from "@mui/system";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        <Grid item xs={12} sx={{ marginBottom: 5 }}>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              display: "flex",
              color: "#000",
              borderRadius: "5px",
              padding: 0,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Chip
              label="All"
              style={{
                backgroundColor: "#0d6dfd",
                color: "#fff",
                fontSize: "1rem",
                fontFamily: "monospace",
                margin: 5,
              }}
              onClick={() => setFilter(data)}
            />
            <Chip
              label="Men's Clothing"
              style={{
                backgroundColor: "#0d6dfd",
                color: "#fff",
                fontSize: "1rem",
                fontFamily: "monospace",
                margin: 5,
              }}
              onClick={() => filterProduct("men's clothing")}
            />
            <Chip
              label="Women's Clothing"
              style={{
                backgroundColor: "#0d6dfd",
                color: "#fff",
                fontSize: "1rem",
                fontFamily: "monospace",
                margin: 5,
              }}
              onClick={() => filterProduct("women's clothing")}
            />
            {/* Women's Clothing
          </Chip> */}
            <Chip
              label="Jewellary"
              style={{
                backgroundColor: "#0d6dfd",
                color: "#fff",
                fontSize: "1rem",
                fontFamily: "monospace",
                margin: 5,
              }}
              onClick={() => filterProduct("jewelery")}
            />
            <Chip
              label="Electronics"
              style={{
                backgroundColor: "#0d6dfd",
                color: "#fff",
                fontSize: "1rem",
                fontFamily: "monospace",
                margin: 5,
              }}
              onClick={() => filterProduct("electronics")}
            />
          </Breadcrumbs>
        </Grid>
        {filter.map((product) => {
          return (
            <Grid item xs={12} sm={4} md={3} id={product.id} key={product.id}>
              <Card elevation={3} sx={{ maxWidth: 345, minHeight: 390 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt="Card"
                  sx={{ objectFit: "contain", padding: "1.5rem" }}
                />
                <Divider sx={{ opacity: "1" }} />
                <CardContent >
                  <Stack direction ='column'>
                  <Typography variant="body1" align="left">
                    $ {product.price}
                  </Typography>
                  <Typography variant="h6" fontSize="large">
                    {product.title.substring(0, 35)}...
                  </Typography>
                  {/* <Typography variant="body2" fontSize="large">
                    {product.description.substring(0, 45)}...
                  </Typography> */}
                  <Stack direction="row" spacing={2}>
                    <Button
                    variant="contained"
                    fullWidth= "true"
                    size='small'
                      // sx={{
                      //   backgroundColor: "#0d6efd",
                      //   color: "#fff",
                      //   borderColor: "0d6efd",
                      //   fontSize: '0.5rem',
                      //   textTransform: 'none',
                      // }}
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        addProduct(product);
                      }}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="contained"
                      fullWidth= "true"
                      size="small"
                      // sx={{
                      //   backgroundColor: "#0d6efd",
                      //   color: "#fff",
                      //   borderColor: "0d6efd",
                      //   textTransform: 'none'
                      // }}
                      component={Link}
                      to={"/product/" + product.id}
                    >
                      Buy Now
                    </Button>
                  </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            // <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            //   <div className="card text-center h-100" key={product.id}>
            //     <img
            //       className="card-img-top p-5"
            //       src={product.image}
            //       alt="Card"
            //       height={300}
            //     />
            //     <div className="card-body">
            //       <h5 className="card-title">
            //         {product.title.substring(0, 12)}...
            //       </h5>
            //       <p className="card-text">
            //         {product.description.substring(0, 90)}...
            //       </p>
            //     </div>
            //     <ul className="list-group list-group-flush">
            //       <li className="list-group-item lead">$ {product.price}</li>
            //       {/* <li className="list-group-item">Dapibus ac facilisis in</li>
            //         <li className="list-group-item">Vestibulum at eros</li> */}
            //     </ul>
            //     <div className="card-body">
            //       <Link to={"/product/" + product.id} className="btn btn-dark m-1">
            //         Buy Now
            //       </Link>
            //       <button className="btn btn-dark m-1" onClick={() =>
            //       { window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            //         addProduct(product)}}>
            //         Add to Cart
            //       </button>
            //     </div>
            //   </div>
            // </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <Container gutterBottom sx={{ marginTop: "2rem" }}>
        <div className="row">
          {/* <div className="col-12"> */}
          <Typography variant="h4" gutterBottom>
            New Products
          </Typography>
          <hr />
          {/* </div> */}
        </div>
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          {loading ? <Loading /> : <ShowProducts />}
        </Grid>
      </Container>
    </>
  );
};

export default Products;
