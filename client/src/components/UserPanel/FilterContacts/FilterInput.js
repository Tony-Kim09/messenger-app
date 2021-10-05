import React from "react"
import {  IconButton, InputBase, Paper } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const Filter = ({name, handler}) => {

    return (
      <Paper
        style={{
          background: `rgba(163, 198, 255, 0.3)`,
          height: 65,
          width: 350,
          display: 'flex', alignItems: 'center',
          marginLeft: "16px"
        }}
        sx={{ height: 300 }}
        elevation = {0}
      >
        <IconButton sx={{ p: '10px' }} aria-label="search" disabled="true">
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