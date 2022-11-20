import React, { useEffect, useState } from "react";
import { auth } from "../firebase.js";

function Registration() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return <div className="App"></div>;
}
export default Registration;
