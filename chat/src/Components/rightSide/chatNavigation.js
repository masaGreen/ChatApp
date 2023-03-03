import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../appContext";

const ChatNavigation = () => {
  const { recipient, handleLogOut,  setChatMessages } = useContext(AppContext);

  function handleChatsClear(){
    // setChatMessages([])
  }
  return (
    <nav className="chatNavigationWrapper">
      {recipient !== null ? (
        <>
          <div className="imgDiv">
            <img src="desert.jpg" alt="" />
            <p>{recipient}</p>
          </div>
          
          <Link to="/">
            <button 
            style={{
              background: "teal",
              padding: "5px",
              cursor: "pointer",
              border: "none",
              outline: "none",
              borderRadius:"5px",
              marginRight: "3rem",
              color:"skyblue"
            }}
          onClick={handleChatsClear}
          >
           chat with others
          </button>
          </Link>

          <button className=".chatimg"
            style={{
              background: "teal",
              padding: "5px",
              cursor: "pointer",
              border: "none",
              borderRadius:"5px",
              outline: "none",
              marginRight: "3rem",
              color:"white",
            }}
            onClick={handleLogOut}
          >
            logout
          </button>

          
    
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
          
          
          <Link to ="/chats"><button className="nochats"
            style={{
              background: "teal",
              padding: "5px",
              cursor: "pointer",
              border: "none",
              outline: "none",
              marginRight: "3rem",
            }}
           
          >
           chats
          </button>
          </Link>
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
