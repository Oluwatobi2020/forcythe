"use client";
import * as React from "react";
import Image from "next/image";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import ForcytheLight from "../assets/forcythe_light.png";

const pages = ["About", "Services", "Portfolio", "Studio", "Foundation"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "none",
        background: "#1D1E2E33",
        backdropFilter: "blur(30px)",
        WebkitBackdropFilter: "blur(30px)",
        padding: "0rem 3rem 0 3rem",
        margin: "0 0 3rem 0",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          //   background: "#1D1E2E26",
          background: "#1D1E2E33",
          //   backdropFilter: "blur(30px)",
          //   WebkitBackdropFilter: "blur(30px)",
        }}
      >
        <Toolbar disableGutters sx={{ padding: "1rem 3rem 0 3rem" }}>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Image
            src={ForcytheLight}
            alt="forcythe-light"
            width={30}
            height={30}
          />
          <Typography
            // variant="h3"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              //   mr: 2,
              display: { xs: "none", md: "flex" },
              padding: "0 0 0 0.5rem",
              fontFamily: "Outfit, serif",
              fontWeight: 700,
              fontSize: "1.5em",
              //   letterSpacing: ".3rem",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            forcythe
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "5rem",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Outfit, serif",
                  fontSize: "1em",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Box
              style={{
                border: "1px dashed #fff",
                padding: "0 0 0.3rem 0.5rem",
                borderRadius: "40px",
                "&:hover": {
                  border: "1px dashed #064386",
                },
              }}
            >
              <Button
                sx={{
                  fontFamily: "Outfit, serif",
                  background: "#fff",
                  borderRadius: "40px",
                  padding: "0.5rem 1.5rem 0.5rem 1.5rem",
                  fontWeight: 600,
                  color: "primary.main",
                  fontSize: "1.1em",
                  "&:hover": {
                    background: "#064386",
                    color: "#fff",
                  },
                }}
              >
                Book a call
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
