import { Box, Container, Grid, Typography, Button } from "@mui/material";

const AboutSection = () => {
  return (
    <Box component="section" sx={{ py: 10, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Texto */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
              About Our Company
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Button variant="contained" color="primary">
              Learn More
            </Button>
          </Grid>

          {/* Imagem */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/media/about-image.jpg"
              alt="About"
              sx={{ width: "100%", borderRadius: 2 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
