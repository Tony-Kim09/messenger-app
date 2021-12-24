import React, { useState, Fragment } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from "react-router-dom";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar, Divider, IconButton, Menu, Tooltip } from '@mui/material';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import ChangeAvatar from './menu-options/ChangeAvatar';

const AccountMenu = ({ setCurrentUser }) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [showDropzone, setShowDropzone] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //Handle Logging Out
  const history = useHistory();

  const handleLogOut = (event) => {
    window.localStorage.removeItem("userAuthenticated");
    history.push("/register");
    setCurrentUser(null);
  }

  return (
    <Fragment>
      <Tooltip title="Account settings">
        <IconButton onClick={handleClick} size="small" >
          <MoreHorizIcon sx={{ width: 32, height: 32 }} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => setShowDropzone(true)}>
          <Avatar /> Change Avatar
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <ChangeAvatar setCurrentUser={setCurrentUser} showDropzone={showDropzone} setShowDropzone={setShowDropzone} />
    </Fragment>
  )
}

export default AccountMenu;