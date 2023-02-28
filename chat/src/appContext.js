import { createContext, useState} from "react";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [chatMessages, setChatMessages] = useState([]);
  const [recipientId, setRecipientId] = useState("");
  const [received, setReceived] = useState(null);
  const [recipient, setRecipient] = useState(null);
  const [file, setFile] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
 
  function handleLogOut() {
    
    localStorage.removeItem("user");
  
    setUser(null);
  }
  return (
    <AppContext.Provider
      value={{
        recipient,
        setRecipient,
        user,
        setUser,
        chatMessages,
        setChatMessages,
        recipientId,
        setRecipientId,
        received,
        setReceived,
        file,
        setFile,
        handleLogOut,
        onlineUsers,
        setOnlineUsers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
