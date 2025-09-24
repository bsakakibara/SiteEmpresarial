import { Box, Container, Grid, Typography } from "@mui/material";

const counters = [
  { label: "Team Members", value: 30, suffix: "+" },
  { label: "Projects Completed", value: 120, suffix: "+" },
  { label: "Happy Clients", value: 80, suffix: "+" },
  { label: "Awards Won", value: 15, suffix: "" },
];

const Counters = () => {
  return (
    <Box component="section" sx={{ py: 10, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {counters.map((counter, idx) => (
            <Grid item xs={6} sm={3} key={idx} sx={{ textAlign: "center" }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                {counter.value}{counter.suffix}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {counter.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Counters;
