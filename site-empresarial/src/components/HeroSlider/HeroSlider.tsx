import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
// import hero1 from "../../assets/images/loopvertical.png";

const slides = [
  { title: "Bem-vindo ao Meu Site", subtitle: "Profissional e moderno" },
  //  { title: "Bem-vindo ao Meu Site", subtitle: "Profissional e moderno", image: hero1 },
  // você pode adicionar mais slides aqui
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        height: "80vh",
        position: "relative",
        // backgroundImage: `url(${slides[current].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" sx={{ mb: 2 }}>{slides[current].title}</Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>{slides[current].subtitle}</Typography>
      <Button variant="contained" color="primary">Saiba Mais</Button>
    </Box>
  );
};

export default HeroSlider;