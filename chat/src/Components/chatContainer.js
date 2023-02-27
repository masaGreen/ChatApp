import LeftSide from "./leftSide/leftSide";
import RightSide from "./rightSide/rightSide";

const ChatContainer = () => {
  return (
    <main style={{ width: "100%", height: "100%", display: "flex" }}>
      <LeftSide />
      <RightSide />
    </main>
  );
};
export default ChatContainer;
