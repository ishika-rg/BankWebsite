import React from "react";
import "./Testimonial.css";
import SingleCard from "../cards/SingleCard.js";
import Grid from "@mui/material/Grid";
import { Typography, Button, Box } from "@mui/material";

import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

const Testimonial = () => {
  return (
    <div className="testimonial">
      <Typography component="h2" variant="h4" sx={{ marginBottom: "30px" }}>
        What our users have to say...{" "}
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <SingleCard> </SingleCard>
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" className="m-4">
        <Button variant="contained" className="p-3 rounded-0 mt-3">
          Read More Stories
        </Button>
      </Box>


    </div>
  );
};

export default Testimonial;
