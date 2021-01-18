import React from "react"
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";

const Filter = ({name, handler}) => {
    return (
        <div>
          <Typography variant="h4" >Chats</Typography>
          <TextField label="Search" variant="filled" value={name} onChange={handler}/>
        </div>
    )
  }

export default Filter;