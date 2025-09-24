import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";

const slides = [
  "Technology to power\nyour business",
  "Software to power\nyour business",
  "Hardware to power\nyour business",
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#ddf8eaff",
        mt: { xs: 6, md: 0 },
        py: { xs: 6, md: 12 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
          maxWidth: 1100,
          mx: "auto",
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Lado esquerdo */}
        <Box
          sx={{
            flex: 1,
            minHeight: 500,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                color: "#00e0c5",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Accelerate the user experience
            </Typography>

            <Typography
              variant="h2"
              fontWeight={700}
              sx={{
                mb: 4,
                color: "#004767",
                whiteSpace: "pre-line",
                lineHeight: 1.2,
                minHeight: 120,
                display: "flex",
                alignItems: "center",
                textTransform: "uppercase",
              }}
            >
              {slides[current]}
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "#004767", lineHeight: 1.6, mb: 6 }}
            >
              Try now our free trial membership. <br />
              Duis aute irure dolor in reprehenderit in voluptate <br />
              velit esse cillum dolore eu fugiat nulla pariature irure dolore.
            </Typography>

            {/* Botões sobem mais perto do texto */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#00e0c5",
                  color: "#fff",
                  px: 4,
                  minWidth: 190,
                  fontWeight: 600,
                  "&:hover": { backgroundColor: "#00c9b8" },
                }}
              >
                Request a quote
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "#004767",
                  color: "#004767",
                  px: 4,
                  minWidth: 190,
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#f9f9f9",
                    borderColor: "#004767",
                  },
                }}
              >
                Free trial
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Lado direito (imagem) */}
        <Box
          sx={{
            flex: 1,
            minHeight: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Exemplo com imagem real */}
          <Box
            component="img"
            src="/images/hero-photo.png"
            alt="Hero"
            sx={{
              maxWidth: "100%",
              maxHeight: 800,
              height: 800,
              width: 500,
              objectFit: "contain",
              border: '1px solid black'
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSlider;
