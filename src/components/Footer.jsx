import React from "react";
import { Container, Box,  } from "@mui/material";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <Container maxWidth="lg">
          <Box py={6} display="flex" flexWrap="wrap" alignItems="center" justifyContent="center">
            <p className="mb-3 mb-md-0">Re-Created with ❤️ by <strong>Anas Shaikh</strong></p>
              {/* <a  href="https://sahibsingh.vercel.app" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Sahib Singh</a>
            </p>
            <a className="text-dark fs-4" href="https://github.com/ssahibsingh" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a> */}
          </Box>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
