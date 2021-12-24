import React from "react";
import User from "../User/User";
import { List, ListItem } from "@material-ui/core";

const UserList = ({ users, filterUser, startConversation }) => {

  const reduceUsers = (acc, cur) => {
    if (cur.username.toLowerCase().includes(filterUser.toLowerCase())) {
      return [...acc,
      <ListItem disableGutters={true} style={{ padding: 1 }} key={cur.id} onClick={() => startConversation(cur)}>
        <User username={cur.username} avatarID={cur.avatar} />
      </ListItem>
      ];
    }
    return acc;
  }

  return (
    <List>
      {users ? users.reduce(reduceUsers, []) : null}
    </List>
  )
}

export default UserList;