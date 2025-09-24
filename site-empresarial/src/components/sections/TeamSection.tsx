import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const teamMembers = [
  {
    name: "Frank De Vinci",
    role: "Marketing",
    photo: "/media/user-1.jpg",
    description: "Lorem ipsum dolor sitamet consectetur eiusmo.",
  },
  {
    name: "Donald Cort",
    role: "Social Media",
    photo: "/media/user-9.jpg",
    description: "Lorem ipsum dolor sitamet consectetur eiusmo.",
  },
  {
    name: "Alicia Sandre",
    role: "Engineer",
    photo: "/media/user-3.jpg",
    description: "Lorem ipsum dolor sitamet consectetur eiusmo.",
  },
];

const TeamSection = () => {
  return (
    <Box component="section" sx={{ py: 10, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        {/* Título da seção */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            The Big Family
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Our team
          </Typography>
          <Typography sx={{ mt: 2, maxWidth: 600, mx: "auto" }} color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </Typography>
        </Box>

        {/* Cards da equipe */}
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Box
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  boxShadow: 3,
                  overflow: "hidden",
                  textAlign: "center",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <Box
                  component="img"
                  src={member.photo}
                  alt={member.name}
                  sx={{ width: "100%", height: 300, objectFit: "cover" }}
                />

                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {member.role}
                  </Typography>

                  {/* Redes sociais */}
                  <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 2 }}>
                    <IconButton color="primary" href="#"><FacebookIcon /></IconButton>
                    <IconButton color="primary" href="#"><TwitterIcon /></IconButton>
                    <IconButton color="primary" href="#"><InstagramIcon /></IconButton>
                  </Box>

                  <Typography variant="body2" color="text.secondary">
                    {member.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;
