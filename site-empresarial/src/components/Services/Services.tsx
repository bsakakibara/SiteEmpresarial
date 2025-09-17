import { Box, Typography, Paper, Grid } from "@mui/material";

const services = [
  { title: "Web Design", description: "Criação de sites profissionais" },
  { title: "SEO", description: "Otimização para buscadores" },
  { title: "Marketing Digital", description: "Estratégias para seu negócio" },
];

const Services = () => {
  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
        Serviços
      </Typography>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ p: 4, textAlign: "center", minHeight: 200 }}>
              <Typography variant="h6">{service.title}</Typography>
              <Typography>{service.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
