import { useContext } from "react";
import AppContext from "../../appContext";

const ChatNavigation = () => {
  const { recipient, handleLogOut } = useContext(AppContext);

  return (
    <nav className="chatNavigationWrapper">
      {recipient !== null ? (
        <>
          <div className="imgDiv">
            <img src="desert.jpg" alt="" />
            <p>{recipient}</p>
          </div>
          <div className="searchDiv">
            <input
              type="text"
              placeholder="search in chat"
              className="search"
            />
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p>tap a friend to start chat</p>
          <button
            style={{
              background: "teal",
              padding: "5px",
              cursor: "pointer",
              border: "none",
              outline: "none",
              marginRight: "3rem",
            }}
            onClick={handleLogOut}
          >
            logout
          </button>
        </div>
      )}
    </nav>
  );
};
export default ChatNavigation;