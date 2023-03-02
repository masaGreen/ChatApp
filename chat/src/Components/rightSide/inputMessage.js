import { useContext, useRef, useEffect, useState } from "react";
import AppContext from "../../appContext";
import { useMutation } from "react-query";
import axios from "axios";
import { io } from "socket.io-client";
import { nanoid } from "nanoid";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import { FaPaperclip, FaPaperPlane, FaSmileBeam } from "react-icons/fa";

const InputMessage = () => {
  const {
    recipientId,
    chatMessages,
    user,
    setChatMessages,
    setReceived,
    file,
    setFile,
    setOnlineUsers,
  } = useContext(AppContext);
  const [messageInput, setMessageInput] = useState("");
  const [picker, setPicker] = useState(false);


  const ioSocket = useRef();

  //addUser to the active users..

  useEffect(() => {
    ioSocket.current = io("https://socketio-12qa.onrender.com");
    ioSocket.current.emit("addUser", user._id);
    
    ioSocket.current.on("getUsers", (users) => {
      setOnlineUsers(users);
    });
    
  }, [user, setOnlineUsers]);

  useEffect(() => {
    ioSocket.current.on("newmess", (data) => {
      setReceived(data);
    });
  }, [setReceived]);

  function handleImage(e) {
    setFile(e.target.files[0]);
  }

  async function createMessage(data) {
    try {
      const response = await axios.post("https://chatapp-api-w60f.onrender.com/message", data);

      setChatMessages([...chatMessages, response.data]);

      setMessageInput("");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  const { mutate } = useMutation(createMessage);

  const handleMessage = async (e) => {
    e.preventDefault();

    if (recipientId === "") {
      setMessageInput("");
      setFile(null);

      alert("tap a friend to start chat");
      return;
    }
    if (messageInput === "" && file === "") return;

    
    const data = {
      members: [user._id, recipientId],
      message: messageInput,
      image: "",
    };
    if (file) {
      const filename = `${Date.now()}__${file.name}`;

      const formData = new FormData();
      formData.append("name", filename);
      formData.append("image", file);
      data.image = filename;
    
      try {
        ioSocket.current.emit("message", {
          ...data,
          _id: nanoid(),
          createdAt: Date.now(),
        });
        mutate(data);
      } catch (error) {
        console.log(error);
      }

      try {
        await axios.post("https://chatapp-api-w60f.onrender.com/imageUpload", formData);
        setFile(null);
      } catch (error) {
        console.log(error);
      }
    } else {
      ioSocket.current.emit("message", {
        ...data,
        _id: nanoid(),
        createdAt: Date.now(),
      });
      try {
        mutate(data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  function handleEmoji(emoji) {
    setMessageInput(`${messageInput}${emoji.native}`);
    setPicker(false);
  }
  function togglePicker() {
    setPicker(!picker);
  }

  return (
    <main className="inputWrapper">
      <div className="emoji-div">
        {picker && (
          <div className="emojiPicker">
            <Picker data={data} onEmojiSelect={handleEmoji} />
          </div>
        )}
      </div>

      <div className="message-input">
        {!picker && (
          <button className="emoji-button">
            <FaSmileBeam
              onClick={togglePicker}
              size={"32"}
              color="rgb(253, 255, 118)"
            />
          </button>
        )}
        <form
          onSubmit={handleMessage}
          className="message-input"
          encType="multipart/form-data"
        >
          <div className="inputdiv">
            <textarea
              placeholder="Message"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <button className="attach-button" type="button">
              <label htmlFor="image">
                <FaPaperclip
                  size={"18px"}
                  style={{ cursor: "pointer", color: "rgb(54, 49, 49)" }}
                />
              </label>
              <input
                type="file"
                name="image"
                id="image"
                hidden
                onChange={(e) => handleImage(e)}
              />
            </button>
          </div>
          <button className="sendButton" type="submit">
            <FaPaperPlane
              size={"18px"}
              style={{ cursor: "pointer", color: "rgb(54, 49, 49)" }}
            />
          </button>
        </form>
      </div>
    </main>
  );
};
export default InputMessage;
