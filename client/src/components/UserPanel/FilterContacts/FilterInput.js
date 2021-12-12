import React from "react"
import { IconButton, InputBase, Paper } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from "@material-ui/core/styles";

const Filter = ({ name, handler }) => {

  const useStyles = makeStyles((theme) => ({
    searchContainer: {
      background: `rgba(163, 198, 255, 0.3)`,
      height: 65,
      display: 'flex',
      alignItems: 'center',
      margin: theme.spacing(0, 2),
    },
    searchIconContainer: {
      paddingLeft: 10
    }
  }));
  const classes = useStyles();
  return (
    <Paper
      className={classes.searchContainer}
      elevation={0}
    >
      <IconButton aria-label="search" disabled={true}>
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="Search"
        id="search-bar"
        inputProps={{ 'aria-label': 'Search' }}
        value={name}
        onChange={handler}
      />
    </Paper>
  )
}

export default Filter;