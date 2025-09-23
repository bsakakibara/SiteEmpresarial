import { Toolbar, Typography, Box, Divider, IconButton } from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

const HeaderTop = () => {
  return (
    <>
      <Toolbar
        sx={{
          justifyContent: "space-evenly",
          px: { xs: 1, sm: 4 },
          py: { xs: 1, sm: 4 },
          backgroundColor: "background.default",
          color: "text.primary",
        }}
      >

        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0.5, sm: 1.5 } }}>
          <Typography variant="h4" color="primary" sx={{ fontWeight: 700 }}>logo</Typography>
          <Typography variant="h4" color="primary" sx={{ fontWeight: 700 }}>MinhaEmpresa</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, sm: 2 } }}>
          <Typography variant="body2" color="textSecondary">
            Rua Exemplo, 123 Município/SP
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ mx: 1, borderColor: "highlight.main" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0.5, sm: 1.5 } }}>
            <IconButton size="small" color="primary">
              <ShoppingCartIcon sx={{ fontSize: 26 }} />
            </IconButton>
            <IconButton size="small" color="primary">
              <SearchIcon sx={{ fontSize: 26 }} />
            </IconButton>
            <FlagIcon sx={{ fontSize: 26 }} />
            <Typography variant="body2" color="textSecondary"
              sx={{ fontWeight: 600, fontSize: 16 }}
            >BR
            </Typography>
          </Box>
        </Box>
      </Toolbar>

      <Divider sx={{ mt: { xs: 1, sm: 2 } }} />
    </>
  );
};

export default HeaderTop;
