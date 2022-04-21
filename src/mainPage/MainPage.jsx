import react from "react";
import AllEffects from "./AllEffects";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import { Theme, createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((Theme) =>
  createStyles({
    root: {
      display: "flex",
      margin: "50px",
    },
    
  })
);

export default function MainPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.cat_bar}>
        <SearchBar />
        <Categories />
      </div>
      <AllEffects />
    </div>
  );
}
