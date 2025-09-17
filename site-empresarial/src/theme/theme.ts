import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
    fontSize: 14,
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
          paddingTop: "100px",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
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
          color: "#ffffff",
        },
      },
    },
  },
});

export default theme;