import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar } from "../components";
import Specs from "../components/Specs";

import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
  Stack,
  Breadcrumbs,
  Box,
  Table,
  TableBody,
  TableRow,
  TableContainer,
  TableCell,
  Divider,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { alpha, styled } from "@mui/material/styles";

const TableCellCustomized = styled(TableCell)(({ theme }) => ({
  border: "none",
}));

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2);
      setLoading2(false);
    };
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <Container maxWidth="xl" sx={{ margin: "3rem 0", padding: "0.5rem 0" }}>
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </Container>
      </>
    );
  };

  const BreadcrumbsComp = () => {
    return (
      <>
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            Product
          </Breadcrumbs>
        </Stack>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <Container maxWidth="xl" sx={{ margin: "3rem 0", padding: "0.5rem 0" }}>
          <Grid container>
            <Grid
              item
              sm={12}
              md={6}
              sx={{ padding: "1rem 0", textAlign: "center" }}
            >
              <img
                // style={{ border: '1px solid #000'}}
                className="img-fluid"
                src={product.image}
                alt={product.title}
                width="400px"
                height="400px"
              />
            </Grid>
            <Grid item md={6} sx={{ padding: "1rem 0" }}>
              <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                {product.category}
              </Typography>
              <Typography variant="h4">{product.title}</Typography>
              {/* <p className="lead"> */}
              <Box mt={2} sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#ff8100",
                    marginRight: "7px",
                    paddingTop: "2px",
                  }}
                >
                  {product.rating && product.rating.rate}{" "}
                </Typography>
                {/* <i className="fa fa-star">< /i> */}
                <Rating
                  name="read-only"
                  value={product.rating && product.rating.rate}
                  readOnly
                />
              </Box>
              {/* </p> */}
              <Typography variant="h5" mt={2} mb={2}>
                ${product.price}
              </Typography>
              <Typography variant="body1" mb={1} sx={{ color: "#51585e" }}>
                {product.description}
              </Typography>
              <TableContainer>
                <Table sx={{ minWidth: 150 }} aria-label="Type-Table">
                  <TableBody>
                    <TableRow>
                      <TableCellCustomized
                        component="th"
                        sx={{ width: 200, padding: 0 }}
                        scope="row"
                      >
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          Type:
                        </Typography>
                      </TableCellCustomized>
                      <TableCellCustomized align="left">
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600, color: "#51585e" }}
                        >
                          Test
                        </Typography>
                      </TableCellCustomized>
                    </TableRow>
                    <TableRow>
                      <TableCellCustomized
                        component="th"
                        scope="row"
                        sx={{ width: 200, padding: 0 }}
                      >
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          Color:
                        </Typography>
                      </TableCellCustomized>
                      <TableCellCustomized align="left">
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600, color: "#51585e" }}
                        >
                          White and Black
                        </Typography>
                      </TableCellCustomized>
                    </TableRow>
                    <TableRow>
                      <TableCellCustomized
                        component="th"
                        scope="row"
                        sx={{ width: 200, padding: 0 }}
                      >
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          Material:
                        </Typography>
                      </TableCellCustomized>
                      <TableCellCustomized align="left">
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600, color: "#51585e" }}
                        >
                          Best Quality
                        </Typography>
                      </TableCellCustomized>
                    </TableRow>
                    <TableRow>
                      <TableCellCustomized
                        component="th"
                        scope="row"
                        sx={{ width: 200, padding: 0 }}
                      >
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          Brand:
                        </Typography>
                      </TableCellCustomized>
                      <TableCellCustomized align="left">
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600, color: "#51585e" }}
                        >
                          Expensive
                        </Typography>
                      </TableCellCustomized>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <hr />
              <Stack direction="row" spacing={3} mt={5}>

              
                <Button
                  // className="btn btn-outline-dark"
                  variant="contained"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    addProduct(product);
                  }}
                >
                  Add to Cart
                </Button>
                <Button variant="contained" component={Link} to="/cart" className="btn btn-dark mx-3">
                  Go to Cart
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  };

  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="d-flex">
            {similarProducts.map((item) => {
              return (
                <div key={item.id} className="card mx-4 text-center">
                  <img
                    className="card-img-top p-3"
                    src={item.image}
                    alt="Card"
                    height={300}
                    width={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title.substring(0, 15)}...
                    </h5>
                  </div>
                  {/* <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">${product.price}</li>
                  </ul> */}
                  <div className="card-body">
                    <Link
                      to={"/product/" + item.id}
                      className="btn btn-dark m-1"
                    >
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-dark m-1"
                      onClick={() => addProduct(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      {/* <BreadcrumbsComp /> */}
      <Container maxWidth="xl">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        <Specs />
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
            <h2 className="">You may also Like</h2>
            <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
            </Marquee>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Product;
