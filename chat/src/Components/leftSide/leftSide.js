import { useContext, useEffect, useRef } from "react";
import AppContext from "../../appContext";
import Conversations from "./conversations";
import LeftSideNavigation from "./leftSideNavigation";
import LeftSideSearch from "./leftSideSearch";

const LeftSide = () => {
  

  
  return (
    <main className="leftWrapper">
      <LeftSideNavigation />
      <LeftSideSearch />
      <Conversations />
    </main>
  );
};
export default LeftSide;
