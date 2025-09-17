import { Toolbar, Typography, Box, Divider, IconButton } from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

const HeaderTop = () => {
  return (
    <>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 2, sm: 4 },
          py: { xs: 1, sm: 2 },
          backgroundColor: "background.default", 
          color: "text.primary",
        }}
      >
        <Box sx={{ width: { xs: "5%", sm: "5%" } }} />

        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0.5, sm: 1.5 } }}>
          <Typography variant="h4" color="primary" sx={{ fontWeight: 700 }}>logo</Typography>
          <Typography variant="h4" color="primary" sx={{ fontWeight: 700 }}>MinhaEmpresa</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, sm: 2 } }}>
          <Typography variant="body2" color="textSecondary">Rua Exemplo, 123</Typography>
          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0.5, sm: 1.5 } }}>
            <IconButton size="small" color="primary"><ShoppingCartIcon fontSize="medium" /></IconButton>
            <IconButton size="small" color="primary"><SearchIcon fontSize="medium" /></IconButton>
            <FlagIcon fontSize="small" />
            <Typography variant="body2" color="textSecondary">Brasil</Typography>
          </Box>
        </Box>

        <Box sx={{ width: { xs: "5%", sm: "5%" } }} />
      </Toolbar>

      <Divider sx={{ mt: { xs: 1, sm: 2 } }} />
    </>
  );
};

export default HeaderTop;
