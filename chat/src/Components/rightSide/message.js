import { useContext } from "react";
import { format } from "timeago.js";
import AppContext from "../../appContext";

const Message = ({ mess }) => {
  const { recipient, chatMessages, user } = useContext(AppContext);

  return (
    <>
      {recipient && chatMessages.length > 0 && (
        <main
          className={
            user._id !== mess.members[0]
              ? "messageWrapper"
              : "replymessageWrapper"
          }
        >
          {mess.image !== "" ? (
            <div className="message-image-div">
              <img
                src={`http://localhost:3500/images/${mess.image}`}
                alt=""
                className="message-image"
              />
              <p className={mess.message ? "show-mess-p" : "hide-p"}>
                {mess.message}
              </p>
              <p className="timeago-p">{format(mess?.createdAt)}</p>
            </div>
          ) : (
            <>
              <p>{mess.message}</p>
              <p className="timeago-p">{format(mess?.createdAt)}</p>
            </>
          )}
        </main>
      )}
    </>
  );
};
export default Message;
