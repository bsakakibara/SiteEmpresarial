import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#f9f9f9", pt: 8, pb: 4 }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, sm: 4 } }}>
        <Grid container spacing={6} justifyContent="space-between" alignItems="flex-start">
          {/* Coluna 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              MinhaMarca
            </Typography>
            <Typography sx={{ mb: 2, whiteSpace: "pre-line" }}>
              Full suite enable teams to develop unique{"\n"}search and discovery experiences.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton color="primary" href="#"><FacebookIcon /></IconButton>
              <IconButton color="primary" href="#"><TwitterIcon /></IconButton>
              <IconButton color="primary" href="#"><InstagramIcon /></IconButton>
              <IconButton color="primary" href="#"><PinterestIcon /></IconButton>
            </Box>
          </Grid>

          {/* Coluna 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Recursos
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {["Parceiros e publicidade", "Sobre nós e a empresa", "Serviços e projetos", "Contato online"].map((text, idx) => (
                <li key={idx} style={{ marginBottom: 6 }}>
                  <Link href="#" underline="hover" color="textPrimary">{text}</Link>
                </li>
              ))}
            </Box>
          </Grid>

          {/* Coluna 3 */}
          <Grid item xs={12} sm={12} md={4}>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {[
                { label: "Endereço", value: "139 Baker St, E1 7PT, London" },
                { label: "Email", value: "contacts@example.com" },
                { label: "Telefone", value: "(02) 123 333 444" },
                { label: "Horário de funcionamento", value: "8am-5pm Seg - Sex" }
              ].map((item, idx) => (
                <li key={idx} style={{ marginBottom: 12 }}>
                  <Typography variant="subtitle2">{item.label}</Typography>
                  <Box sx={{ borderBottom: "1px solid #ccc", mb: 1 }} />
                  <Typography variant="body2">{item.value}</Typography>
                </li>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Footer Bar */}
      <Box
        sx={{
          mt: 6,
          borderTop: "1px solid #ccc",
          pt: 3,
          px: { xs: 2, sm: 4 },
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          fontSize: 14,
        }}>
        <Typography component="span">
          © 2025 MinhaMarca. Handmade by <Link href="https://example.com" target="_blank">example.com</Link>.
        </Typography>
        <Box component="span" sx={{ display: "inline-flex", ml: 2, gap: 2 }}>
          <Link href="#">Contato</Link>
          <span>|</span>
          <Link href="#">Política de Privacidade</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
