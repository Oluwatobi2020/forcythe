import {
  Box,
  Button,
  Grid2,
  Radio,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ForcytheDark from "../assets/forcythe_light.png";
import Image from "next/image";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";

const Footer = () => {
  return (
    <Box sx={{ width: "100%", padding: "1.5rem" }}>
      <Grid2
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Grid2
          size={{ lg: 4.5, md: 4.5, sm: 12, xs: 12 }}
          sx={{ display: "flex", alignItems: "flex-start" }}
        >
          <Stack>
            <Box
              sx={{ display: "flex", alignItems: "center", paddingTop: "2rem" }}
            >
              <TextField
                name="emailAddress"
                value=""
                fullWidth
                sx={{ borderRadius: "40px 0 0 40px" }}
              />
              <Button
                sx={{
                  background: "#60A6E7",
                  borderRadius: "0 40px 40px 0",
                  color: "#030516",
                  padding: "0.95rem",
                  width: "140px",
                  marginLeft: "-0.1rem",
                  "&:hover": {
                    background: "#064386",
                    color: "#fff",
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <Radio sx={{ color: "#fff" }} />
              </Box>
              <Box>
                <Typography sx={{ color: "#fff", fontSize: "0.9em" }}>
                  I agree to receive other notificiations from Forcythe
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Grid2>
        <Grid2
          size={{ lg: 4, md: 4, sm: 12, xs: 12 }}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          <Stack>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ marginRight: "0.5rem" }}>
                <Image src={ForcytheDark} alt="logo" width={25} height={25} />
              </Box>
              <Box>
                <Typography sx={{ color: "#fff", fontSize: "1em" }}>
                  Forcythe
                </Typography>
              </Box>
            </Box>
            <Box sx={{ paddingTop: "2rem" }}>
              <Typography
                sx={{ color: "#B2B2B2", fontSize: "1em", textAlign: "left" }}
              >
                We are the growth company for businesses looking to scale. We
                are dedicated to transforming businesses with bespoke digital
                solutions that drive growth.
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", paddingTop: "2rem" }}
            >
              <Box
                sx={{
                  borderRadius: "50%",
                  border: "1px solid #fff",
                  width: "45px",
                  padding: "0.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "0.5rem",
                }}
              >
                <FaFacebookF color="#fff" size={23} />
              </Box>
              <Box
                sx={{
                  borderRadius: "50%",
                  border: "1px solid #fff",
                  width: "45px",
                  padding: "0.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "0.5rem",
                }}
              >
                <FaInstagram color="#fff" size={23} />
              </Box>
              <Box
                sx={{
                  borderRadius: "50%",
                  border: "1px solid #fff",
                  width: "45px",
                  padding: "0.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "0.5rem",
                }}
              >
                <BsTwitterX color="#fff" size={23} />
              </Box>
              <Box
                sx={{
                  borderRadius: "50%",
                  border: "1px solid #fff",
                  width: "45px",
                  padding: "0.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "0.5rem",
                }}
              >
                <FaLinkedinIn color="#fff" size={23} />
              </Box>
              <Box
                sx={{
                  borderRadius: "50%",
                  border: "1px solid #fff",
                  width: "45px",
                  padding: "0.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <RiYoutubeLine color="#fff" size={23} />
              </Box>
            </Box>
          </Stack>
        </Grid2>
        <Grid2
          size={{ lg: 3, md: 3, sm: 12, xs: 12 }}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          <Stack>
            <Box>
              <Typography
                sx={{
                  fontSize: "1.5em",
                  fontWeight: 600,
                  textAlign: "left",
                  color: "#fff",
                }}
              >
                Company
              </Typography>
            </Box>
            <Box sx={{ cursor: "pointer", paddingTop: "1rem" }}>
              <Typography
                sx={{ fontSize: "1em", textAlign: "left", color: "#fff" }}
              >
                About
              </Typography>
            </Box>
            <Box sx={{ cursor: "pointer", paddingTop: "0.5rem" }}>
              <Typography
                sx={{ fontSize: "1em", textAlign: "left", color: "#fff" }}
              >
                Services
              </Typography>
            </Box>
            <Box sx={{ cursor: "pointer", paddingTop: "0.5rem" }}>
              <Typography
                sx={{ fontSize: "1em", textAlign: "left", color: "#fff" }}
              >
                Portfolio
              </Typography>
            </Box>
            <Box sx={{ cursor: "pointer", paddingTop: "0.5rem" }}>
              <Typography
                sx={{ fontSize: "1em", textAlign: "left", color: "#fff" }}
              >
                Studio
              </Typography>
            </Box>
            <Box sx={{ cursor: "pointer", paddingTop: "0.5rem" }}>
              <Typography
                sx={{ fontSize: "1em", textAlign: "left", color: "#fff" }}
              >
                Foundation
              </Typography>
            </Box>
            <Box sx={{ cursor: "pointer", paddingTop: "0.5rem" }}>
              <Typography
                sx={{ fontSize: "1em", textAlign: "left", color: "#fff" }}
              >
                Careers
              </Typography>
            </Box>
            <Box sx={{ cursor: "pointer", paddingTop: "0.5rem" }}>
              <Typography
                sx={{ fontSize: "1em", textAlign: "left", color: "#fff" }}
              >
                Blog
              </Typography>
            </Box>
          </Stack>
        </Grid2>
      </Grid2>

      <Grid2
        container
        spacing={2}
        sx={{ borderBottom: "1px solid #60A6E7", padding: "2rem 0 3rem 0" }}
      ></Grid2>
      <Typography sx={{ color: "#60A6E7", fontSize: "0.8em", paddingTop:"1rem" }}>
        Copyright © 2024 Forcythe. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
