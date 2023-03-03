import { useContext, useEffect, useRef } from "react";
import AppContext from "../../appContext";
import Conversations from "./conversations";
import LeftSideNavigation from "./leftSideNavigation";
import LeftSideSearch from "./leftSideSearch";
import {io} from "socket.io-client"
const LeftSide = () => {
  const {user, setOnlineUsers} = useContext(AppContext)
  // 1
  const ioSocket = useRef()

  useEffect(()=>{
    ioSocket.current = io("http://localhost:3800");
    ioSocket.current.on("getUsers", (users) => {
      setOnlineUsers(users);
    });
  },[user])
  return (
    <main className="leftWrapper">
      <LeftSideNavigation />
      <LeftSideSearch />
      <Conversations />
    </main>
  );
};
export default LeftSide;
