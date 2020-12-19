import React from "react";
import { useHistory } from "react-router-dom";

//Just using this page for testing purposes for now

const Messenger = ({ changeUserState }) => {
  const history = useHistory();
  
  const handleLogOut = (event) => {
    event.preventDefault();
    window.localStorage.removeItem("userAuthenticated");
    history.push("/");
    changeUserState(null);
  }

  return (
    <div> 
      <p>You made it! </p>
      <form onSubmit={handleLogOut}>
      <button type="submit">logout</button>
    </form>
    </div>
    
  );
}

export default Messenger;