import * as React from "react";
import "./Card.css";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import shree from "../../assests/sreehari.png";

const SingleCard = () => {
  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          border: 0,
          borderRadius: 0,
          boxShadow: "0 2px 6px #15668421",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: 56, height: 56 }}
              aria-label="name"
              alt="Shreedhari"
              src={shree}
            ></Avatar>
          }
          title="Shreehari R."
          subheader="Infosys"
        ></CardHeader>

        <div className="card_upper mx-3 mb-2 p-2 rounded">
          <Grid container rowSpacing={1}>
            <Grid item xs={6}>
              <Typography
                component="h3"
                sx={{ color: "grey", fontSize: "15px" }}
              >
                {" "}
                Institute
              </Typography>
              <Typography
                component="h3"
                sx={{ color: "#37474f", fontSize: "15px" }}
              >
                {" "}
                Great Learning
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                component="h3"
                sx={{ color: "grey", fontSize: "15px" }}
              >
                {" "}
                Course
              </Typography>
              <Typography
                component="h3"
                sx={{ color: "#37474f", fontSize: "15px" }}
              >
                {" "}
                PGP Data Science
              </Typography>
            </Grid>
          </Grid>
        </div>

        <CardContent>
          <Typography variant="body2" sx={{ color: "#37474f" }}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default SingleCard;
