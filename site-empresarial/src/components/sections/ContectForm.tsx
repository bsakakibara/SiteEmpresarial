import { Box, Container, Typography, TextField, Button, Grid } from "@mui/material";

const ContactForm = () => {
  return (
    <Box component="section" sx={{ py: 10, bgcolor: "background.paper" }}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
          Contact Us
        </Typography>

        <Box component="form">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={5}
                required
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button variant="contained" color="primary" size="large">
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
