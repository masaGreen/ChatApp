import Message from "./message";
import { useContext, useEffect, useRef } from "react";
import AppContext from "../../appContext";

const Chats = () => {
  const { chatMessages, received, setChatMessages} =
    useContext(AppContext);
  const lastDiv = useRef(null);
  useEffect(() => {
    if (received !== null) {
      setChatMessages((prev) => [...prev, received]);
    }
  }, [received, setChatMessages]);

  useEffect(() => {
    lastDiv.current?.scrollIntoView({ behaviour: "smooth" });
  }, [chatMessages]);

  return (
    <main className="chatWrapper">
      {chatMessages?.map((mess) => {
        return <Message key={mess._id} mess={mess} />;
      })}

      <div ref={lastDiv} />
    </main>
  );
};
export default Chats;
