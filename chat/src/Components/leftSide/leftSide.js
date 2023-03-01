import { useContext, useState } from "react";
import AppContext from "../../appContext";
import Conversations from "./conversations";
import LeftSideNavigation from "./leftSideNavigation";
import LeftSideSearch from "./leftSideSearch";

const LeftSide = () => {
  const {showChats} = useContext(AppContext)
  return (
    <main className={showChats?"leftWrapper":"noLeftWrapper"}>
      <LeftSideNavigation />
      <LeftSideSearch />
      <Conversations />
    </main>
  );
};
export default LeftSide;
