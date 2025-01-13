"use client";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1D1E2E",
    },
    secondary: {
      main: "#CCBED7",
      contrastText: "#fff",
    },
    background: {
      default: "#F4F4F4",
      paper: "#fff",
      contrastText: "#000",
    },
    lightLavender: {
      main: "#E8E2EE",
    },
    black: {
      main: "#1C1D20",
    },
    paleBlue: {
      main: "#837B8A",
      contrastText: "#3D3D3D",
    },
  },
  components: {
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
    // MuiAppBar: {
    //   styleOverrides: {
    //     colorPrimary: {
    //       backgroundColor: "#FFF",
    //       color: "#4A365B",
    //     },
    //   },
    // },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "#FFFFFF",
        },
      },
    },
    // MuiContainer: {
    //   styleOverrides: {
    //     root: {
    //     //   background: "#F5F5F5",
    //       background: "#a6a8c026",
    //     },
    //   },
    // },
    MUIDataTableBodyCell: {
      styleOverrides: {
        root: {
          fontWeight: "400",
          fontSize: "0.756rem",
          lineHeight: 1.4,
        },
      },
    },
  },

  typography: {
    fontFamily: "Inter",
    h1: {
      fontWeight: 600,
      fontSize: "3rem",
      lineHeight: 1.5,
      fontFamily: "Outfit, serif",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.25rem",
      lineHeight: 1.5,
      fontFamily: "Outfit, serif",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: 1.5,
      fontFamily: "Outfit, serif",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.5,
      fontFamily: "Outfit, serif",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.5,
      fontFamily: "Outfit, serif",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.5,
      fontFamily: "Outfit, serif",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      fontFamily: "Outfit, serif",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.6,
      fontFamily: "Outfit, serif",
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1.75,
      fontFamily: "Outfit, serif",
      letterSpacing: 0,
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      fontFamily: "Outfit, serif",
      letterSpacing: 0,
    },
    subtitle3: {
      fontWeight: "bold",
      fontSize: "1.1rem",
      lineHeight: 1.75,
      fontFamily: "Outfit, serif",
      letterSpacing: 0,
    },
    subtitle2lg: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1.75,
      fontFamily: "Outfit, serif",
      letterSpacing: 0,
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.6,
      fontFamily: "Outfit, serif",
      letterSpacing: 0,
    },
    overline: {
      fontWeight: 600,
      fontSize: "0.75rem",
      lineHeight: 2.46,
      fontFamily: "Outfit, serif",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },
    button: {
      textTransform: "none",
    },
  },
});
