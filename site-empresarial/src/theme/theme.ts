import { createTheme, type PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    highlight: Palette['primary'];
  }
  interface PaletteOptions {
    highlight?: PaletteColorOptions;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
    fontSize: 14,
    h5: { fontWeight: 800 },
    h6: { fontWeight: 600 },
    body1: { color: "#404d60" },
    body2: { color: "#404d60" },
  },
  palette: {
    primary: {
      main: "#ffffff",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#404d60",
      contrastText: "#404d60",
    },
    highlight: {
      main: "#00e0c5",
      contrastText: "#000000",
    },
    background: {
      default: "#004767",
      paper: "#004767",
    },
    text: {
      primary: "#ffffff",
      secondary: "#404d60",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#004767",
          boxShadow: "none",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#ffffff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          textTransform: "none",
          "&:hover": {
            color: "#00e0c5",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#ffffff",
          color: "#000000",
          borderTop: "3px solid #00e0c5",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#000000",
          "&:hover": {
            backgroundColor: "#00e0c5",
            color: "#ffffff",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat, Arial, sans-serif",
          color: "#ffffff",
          textDecoration: "none",
          "&:hover": {
            color: "#f0f0f0",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat, Arial, sans-serif",
          color: "#ffffff",
        },
      },
    },
  },
});

export default theme;