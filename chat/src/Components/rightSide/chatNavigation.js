import { useContext } from "react";
import AppContext from "../../appContext";

const ChatNavigation = () => {
  const { recipient, handleLogOut , setShowChats} = useContext(AppContext);

  return (
    <nav className="chatNavigationWrapper">
      {recipient !== null ? (
        <>
          <div className="imgDiv">
            <img src="desert.jpg" alt="" />
            <p>{recipient}</p>
          </div>
          
          <button className=".chatimg"
            style={{
              background: "teal",
              padding: "5px",
              cursor: "pointer",
              border: "none",
              outline: "none",
              marginRight: "3rem",
            }}
            onClick={setShowChats(false)}
          >
           chats
          </button>

          <button className=".chatimg"
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

          
          {/* <div className="searchDiv">
            <input
              type="text"
              placeholder="search"
              className="search"
            />
          </div> */}
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
          <p className="navp">tap a friend to start chat</p>
          
          <button className="nochats"
            style={{
              background: "teal",
              padding: "5px",
              cursor: "pointer",
              border: "none",
              outline: "none",
              marginRight: "3rem",
            }}
            onClick={()=>setShowChats(false)}
          >
           chats
          </button>
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
