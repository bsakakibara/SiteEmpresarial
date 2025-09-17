import { AppBar } from "@mui/material";
import HeaderTop from "./HeaderTop";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}
      sx={{ borderBottom: "0px solid #ccc" }}>
      <HeaderTop />
      <HeaderMenu />
    </AppBar>
  );
};

export default Header;