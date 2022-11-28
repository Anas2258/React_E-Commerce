import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import {
  Button,
  Box,
  Typography,
  Stack,
  Grid,
  Divider,
  Container,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
// import { Container, padding, textTransform, width } from "@mui/system";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";




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
      console.log(response, 'response')
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

  const ToggleCustomized = styled(ToggleButton)(({ theme }) => ({
    selected: {
      "&&": {
        backgroundColor: "#000",
        color: "red"
      }
    }
  }))

  const ShowProducts = () => {
    const [alignment, setAlignment] = useState("test");

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
    return (
      <>
        <Grid item xs={12} sx={{ marginBottom: 5 }}>
        {/* <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleCustomized onClick={() => setFilter(data)} value="left" aria-label="left aligned">
  TEst
      </ToggleCustomized>
      <ToggleCustomized onClick={() => filterProduct("men's clothing")} value="center" aria-label="centered">
      TEst
      </ToggleCustomized>
      <ToggleCustomized onClick={() => filterProduct("women's clothing")} value="right" aria-label="right aligned">
    TEst
      </ToggleCustomized>
      <ToggleCustomized onClick={() => filterProduct("jewelery")} value="justify" aria-label="justified">
        TEst
      </ToggleCustomized>
      <ToggleCustomized onClick={() => filterProduct("electronics")} value="justify" aria-label="justified">
        TEst
      </ToggleCustomized>
    </ToggleButtonGroup> */}
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
                <CardContent>
                  <Stack direction="column" sx={{ position: "relative" }}>
                    <Typography variant="body1" align="left">
                      $ {product.price}
                    </Typography>
                    <Typography
                      variant="h6"
                      fontSize="large"
                      sx={{ color: "#51585e" }}
                    >
                      {product.title.substring(0, 45)}...
                    </Typography>
                    {/* <Typography variant="body2" fontSize="large">
                    {product.description.substring(0, 45)}...
                    </Typography> */}
                    <Stack
                      sx={{ position: "absolute", top: "6.5rem" }}
                      direction="row"
                      spacing={2}
                    >
                      <Button
                        variant="contained"
                        // fullWidth="true"
                        size="small"
                        sx={{
                          fontWeight: 500,
                          backgroundColor: "#0d6efd",
                          textAlign: "center",
                          textTransform: "capitalize",
                          borderRadius: "10px",
                          minWidth: "6.5rem",
                          padding: "0.5rem 1rem",
                        }}
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                          addProduct(product);
                        }}
                      >
                        <AddShoppingCartIcon /> Add to Cart
                      </Button>
                      <Button
                        variant="contained"
                        // fullWidth="true"
                        size="small"
                        sx={{
                          borderRadius: "10px",
                          textAlign: "center",
                          textTransform: "capitalize",
                          minWidth: "5rem",
                          color: "#fff",
                        }}
                        component={Link}
                        to={"/product/" + product.id}
                      >
                        <LocalMallIcon /> Buy Now
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
      <Container sx={{ marginTop: "2rem" }}>
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
