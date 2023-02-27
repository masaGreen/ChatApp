import InputMessage from "./inputMessage";
import ChatNavigation from "./chatNavigation";
import Chats from "./chats";
import { useContext } from "react";
import AppContext from "../../appContext";

const RightSide = () => {
  const { file } = useContext(AppContext);
  return (
    <main className="rightWrapper">
      <ChatNavigation />
      {file && (
        <img
          src={`${URL.createObjectURL(file)}`}
          alt=""
          className="image-preview"
        />
      )}
      <Chats />
      <InputMessage />
    </main>
  );
};
export default RightSide;
