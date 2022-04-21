import react from "react";
import "../stylesheet/searchBox.scss";
import { TextField } from "@mui/material";
import { Theme, createStyles, makeStyles } from "@mui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((Theme) =>
  createStyles({
    root: {},
  })
);

export default function SearchBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField
        id="outlined-basic"
        label="search effects"
        variant="outlined"
        className="search_box"
      />
      <FontAwesomeIcon icon={faSearch} className='search_icon' />
    </div>
  );
}
