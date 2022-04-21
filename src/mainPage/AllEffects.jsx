import react from "react";
import all_effects from "../constants/all_effects";
import { Theme, createStyles, makeStyles } from "@mui/styles";
import { Grid, Item } from "@mui/material";

const useStyles = makeStyles((Theme) =>
  createStyles({
    root: {},
    sorting_category: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-end",
    },
  })
);

export default function AllEffects() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.sorting_category}>
        <h2>All Effect</h2>
        <div>
          <button>New</button>
          <button>Popular</button>
        </div>
      </div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <span>1</span>
        </Grid>
        <Grid item xs={3}>
          <span>2</span>
        </Grid>
        <Grid item xs={3}>
          <span>3</span>
        </Grid>
        <Grid item xs={3}>
          <span>4</span>
        </Grid>
      </Grid>
    </div>
  );
}
