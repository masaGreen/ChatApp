import { useContext } from "react";
import AppContext from "../../appContext";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const SingleConversation = ({ recipient }) => {
  const navigate = useNavigate()
  const { setRecipient, setRecipientId, setChatMessages, user, onlineUsers} =
    useContext(AppContext);

  const onlineFlag = onlineUsers.some((user) => user.userId === recipient._id);

  const fetchMessages = async (sender, recip) => {
    const { data } = await axios.get(`http://localhost:3500/message/${sender}/${recip}`
      
      // `https://chatapp-api-w60f.onrender.com/message/${sender}/${recip}`
    );

    setChatMessages(data);

    return data;
  };

  function handleHeader() {
    setRecipient(recipient.name);
    setRecipientId(recipient._id);
 
    fetchMessages(user._id, recipient._id);
    navigate("/chats")
  }
  return (
    <main className="singleConversationWrapper" onClick={handleHeader}>
      <img src="desert.jpg" alt="" />
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <div>
          <p style={{ fontSize: "16px", color: "aqua" }}>{recipient.name} </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            letterSpacing: "2px",
            gap: "5px",
            color: "coral",
            fontFamily: "Arial",
            fontSize: "12px",
          }}
        >
          <p className={onlineFlag ? "show-p" : "hide-p"}>
            {onlineFlag ? "online" : ""}{" "}
          </p>
          <div className={onlineFlag ? "notification" : "hide-p"}></div>
        </div>
      </div>
    </main>

  );
};
export default SingleConversation;
