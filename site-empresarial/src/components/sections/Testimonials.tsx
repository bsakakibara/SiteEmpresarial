import { Box, Container, Typography, Grid, Paper } from "@mui/material";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Company",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
  },
  {
    name: "Jane Smith",
    role: "Marketing Manager",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Alice Johnson",
    role: "Developer",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const Testimonials = () => {
  return (
    <Box component="section" sx={{ py: 10, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
          What Our Clients Say
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((item, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Paper
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: 3,
                }}
              >
                <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
                  "{item.text}"
                </Typography>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.role}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
