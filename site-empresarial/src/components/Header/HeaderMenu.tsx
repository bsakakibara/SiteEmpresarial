import React, { useState, useEffect } from "react";
import { Toolbar, Button, Box, Typography, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import theme from "../../theme/theme";

const HeaderMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuId, setMenuId] = useState<string | null>(null);
  const [showSticky, setShowSticky] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const handleOpen = (event: React.MouseEvent<HTMLElement>, id: string) => {
    setAnchorEl(event.currentTarget);
    setMenuId(id);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setMenuId(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 200 && currentScroll > lastScroll) {
        // Se desceu mais de 200px e rolando para baixo
        setShowSticky(true);
      } else if (currentScroll < 200) {
        // Se voltou para o topo
        setShowSticky(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-around",
        px: { xs: 2, sm: 9 },
        py: { xs: 0, sm: 0 },
        bgcolor: showSticky ? "background.paper" : "transparent",
        boxShadow: showSticky ? 3 : 0,
        position: showSticky ? "fixed" : "relative",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        transition: "all 0.4s ease",
      }}
    >
      <Box sx={{ display: "flex", gap: { xs: 1, sm: 2 } }}>
        {["Home", "Serviços", "Sobre", "Contato"].map((item) => (
          <Box key={item}>
            <Button
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                py: 0.5,
                minHeight: 0,
                color: theme.palette.primary.main,
                fontWeight: 800,
                "&:hover": { color: theme.palette.highlight.main },
              }}
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
              PaperProps={{ elevation: 3, sx: { mt: 2, minWidth: 160 } }}
            >
              <MenuItem>Teste {item}</MenuItem>
            </Menu>
          </Box>
        ))}
      </Box>

      <Typography variant="body2" sx={{ fontWeight: 800 }}>
        Tel:{" "}
        <Box component="span" sx={{ color: theme.palette.highlight.main }}>
          (02) 123 333 444
        </Box>
      </Typography>
    </Toolbar>
  );
};

export default HeaderMenu;