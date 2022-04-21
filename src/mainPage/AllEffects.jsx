import react from "react";
import "../stylesheet/mainpage.scss";
import { Redirect } from "react-router-dom";
import all_effects from "../constants/all_effects";
import { Theme, createStyles, makeStyles } from "@mui/styles";
import { Grid, Card, CardMedia, Typography, CardContent } from "@mui/material";

const useStyles = makeStyles((Theme) =>
  createStyles({
    root: {
      width: "1000px",
    },
    sorting_category: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 20,
    },
    card: {
      marginTop: 15,
      cursor: "pointer",
    },
    img: {
      width: "100%",
    },
  })
);

export default function AllEffects() {
  const classes = useStyles();
  const allEffectData = all_effects;

  const handleClick = (title) => {
    return <Redirect to="/title" />;
  };

  return (
    <div className={classes.root}>
      <div className={classes.sorting_category}>
        <h2>All Effects</h2>
        <div>
          <button className="sort_btn">New</button>
          <button className="sort_btn">Popular</button>
        </div>
      </div>
      <Grid
        container
        className="all_effect"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {allEffectData &&
          allEffectData.map((effect) => (
            <Grid item xs={3}>
              <Card
                className={classes.card}
                onClick={handleClick(effect.title)}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={effect.image_url}
                  alt={effect.image_url}
                  className={classes.img}
                />

                <CardContent>
                  <Typography>{effect.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
