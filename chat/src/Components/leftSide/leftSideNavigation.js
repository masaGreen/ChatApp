import { useContext } from "react";
import AppContext from "../../appContext";

const LeftSideNavigation = () => {
  const { user, handleLogOut } = useContext(AppContext);
  return (
    <nav className="chatNavigationWrapper">
      <div className="imgDiv">
        <img src="desert.jpg" alt="" className="chatimg" />
        <p>{user.name}</p>

        <button className="logout-button" onClick={handleLogOut}>
          logout
        </button>
      </div>
    </nav>
  );
};
export default LeftSideNavigation;
