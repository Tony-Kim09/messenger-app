import React from "react";
import Grid from "@material-ui/core/Grid";

import User from "./User";
import useStyles from "../../themes/messengerStyle";

const UserList = ({users, filterUser, startConversation}) => {
  const classes = useStyles();


  const reduceUsers = (acc, cur) => {
    if (cur.username.includes(filterUser)){
      return [...acc, 
        <Grid item key={cur.id} onClick={() => startConversation(cur)}>
         <User username={cur.username}/>
        </Grid>
      ];
    }
    return acc;
  }

  return (
     <Grid container direction="column" className={classes.userList}>
       {users ? users.reduce(reduceUsers, []) : null}
     </Grid>
  )
}

export default UserList;