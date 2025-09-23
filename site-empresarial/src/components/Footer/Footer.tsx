import { Box, Typography, Grid, Link, IconButton, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import theme from "../../theme/theme";

const Footer = () => {
  return (
    <Box component="footer"
      sx={{
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <Box
        sx={{
          maxWidth: "100%",
          mx: "auto",
          px: { xs: 2, sm: 6 },
          py: { xs: 6, sm: 6 },
        }}
      >
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{
            maxWidth: "1100px",
            mx: "auto",
          }}
        >
          {/* Coluna 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" sx={{ mb: 4 }}>
              MinhaMarca
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, whiteSpace: "pre-line" }}>
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
            <Typography variant="h5" sx={{ mb: 4 }}>
              Recursos
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {["Parceiros e publicidade", "Sobre nós e a empresa", "Serviços e projetos", "Contato online"].map((text, idx) => (
                <li key={idx} style={{ marginBottom: 6, display: "flex", alignItems: "center", gap: 10 }}>
                  {/* Traço highlight */}
                  <Box sx={{ width: 12, height: 2, backgroundColor: theme.palette.highlight.main }} />
                  <Link
                    href="#"
                    underline="hover"
                    sx={{
                      color: "text.primary",
                      fontSize: 13,
                    }}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </Box>
          </Grid>

          {/* Coluna 3 */}
          <Grid item xs={12} sm={6} md={4}
            sx={{
              backgroundColor: "#0000001C",
              borderRadius: 1,
              p: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Box component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                display: "flex",
                flexDirection: "column",
                gap: 1,
                width: "100%",
                fontSize: 13,
              }}
            >
              {[
                { label: "Endereço", value: "139 Baker St, E1 7PT, London" },
                { label: "Email", value: "contacts@example.com" },
                { label: "Telefone", value: "(02) 123 333 444" },
                { label: "Horário de funcionamento", value: "8am-5pm Seg - Sex" }
              ].map((item, idx) => (
                <li key={idx} style={{ marginBottom: 12 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography variant="subtitle2"
                      sx={{ fontWeight: 600 }}>
                      {item.label}
                    </Typography>
                    <Box
                      sx={{
                        width: 10,
                        height: 2,
                        backgroundColor: theme.palette.highlight.main,
                        flexShrink: 0,
                      }}
                    />
                    <Box sx={{ borderBottom: "1px solid #ccc", mb: 0 }} />
                    <Typography variant="body2">{item.value}</Typography>
                  </Box>
                </li>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Footer Bar */}

      <Divider />

      <Box
        sx={{
          maxWidth: '1100px',
          width: "100%",         
          px: { xs: 0, sm: 4 },
          py: 2,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          mx: "auto",            
          gap: 2,
        }}>
        <Typography component="span" variant="body2">
          © 2025 MinhaMarca. Handmade by{" "}
          <Link
            href="https://example.com"
            target="_blank"
            sx={{ color: theme.palette.highlight.main }}
          >
            example.com
          </Link>
          .
        </Typography>
        <Box component="span" sx={{ display: "inline-flex", ml: 0, gap: 1, fontSize: 13 }}>
          <Link href="#" sx={{ color: "highlight.main" }}>Contato</Link>
          <span>|</span>
          <Link href="#" sx={{ color: "highlight.main" }}>Política de Privacidade</Link>
        </Box>
      </Box>
    </Box >
  );
};

export default Footer;
