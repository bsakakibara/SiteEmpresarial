import { useState } from "react";
import { Toolbar, Button, Box, Typography, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const HeaderMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuId, setMenuId] = useState<string | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>, id: string) => {
    setAnchorEl(event.currentTarget);
    setMenuId(id);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setMenuId(null);
  };

  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        px: { xs: 2, sm: 4 },
        py: { xs: 0.5, sm: 1 },
        mt: -2
      }}
    >
      <Box sx={{ width: { xs: "5%", sm: "2%" } }} />

      <Box sx={{ display: "flex", gap: { xs: 1.5, sm: 4 } }}>
        {["Home", "Serviços", "Sobre", "Contato"].map((item) => (
          <Box key={item}>
            <Button
              color="primary"
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ py: 0.5, minHeight: 0 }}
              onMouseEnter={(e) => handleOpen(e, item)}
            >
              {item}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={menuId === item}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              PaperProps={{ elevation: 3, sx: { mt: 0.5, minWidth: 160 } }}
            >
              <MenuItem disabled>Teste {item}</MenuItem>
            </Menu>
          </Box>
        ))}
      </Box>

      <Typography variant="body2" color="textSecondary" sx={{ textAlign: "right" }}>
        Tel: (11) 99999-9999
      </Typography>

      <Box sx={{ width: { xs: "5%", sm: "2%" } }} />
    </Toolbar>
  );
};

export default HeaderMenu;
