import React from "react"
import TextField from "@material-ui/core/TextField";
import { InputAdornment, makeStyles, Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import useStyles from "../../../themes/messengerStyle"

const Filter = ({name, handler}) => {
    const classes = useStyles();

    return (
        <div className={classes.searchBarContainer}>
          <Typography variant="h4" style={{marginBottom: 10}} >Chats</Typography>
          <TextField label="Search" variant="filled" value={name} onChange={handler} color="primary"
          style={{
            background: "rgba(122, 188, 255, 0.3)"
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon/>
              </InputAdornment>
            ),
            }}/>
        </div>
    )
  }

export default Filter;