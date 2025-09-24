import { Box, Container, Grid, Typography } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import ComputerIcon from "@mui/icons-material/Computer";
import SecurityIcon from "@mui/icons-material/Security";
import CloudIcon from "@mui/icons-material/Cloud";

const services = [
  {
    title: "Web Development",
    description:
      "Desenvolvemos sites modernos e responsivos, com foco em performance e SEO.",
    icon: <ComputerIcon fontSize="large" color="primary" />,
  },
  {
    title: "IT Support",
    description:
      "Suporte completo para sua infraestrutura, garantindo uptime e segurança.",
    icon: <BuildIcon fontSize="large" color="primary" />,
  },
  {
    title: "Cyber Security",
    description:
      "Protegemos seus sistemas e dados contra ameaças digitais avançadas.",
    icon: <SecurityIcon fontSize="large" color="primary" />,
  },
  {
    title: "Cloud Solutions",
    description:
      "Soluções em nuvem para armazenamento, backup e escalabilidade de serviços.",
    icon: <CloudIcon fontSize="large" color="primary" />,
  },
];

const ServicesSection = () => {
  return (
    <Box component="section" sx={{ py: 10, bgcolor: "grey.100" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Our Core Services
        </Typography>
        <Typography
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Descubra como podemos ajudar a sua empresa a crescer com nossas soluções.
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Box
                sx={{
                  p: 4,
                  textAlign: "center",
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <Box sx={{ mb: 2 }}>{service.icon}</Box>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;