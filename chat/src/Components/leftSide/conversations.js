import axios from "axios";
import SingleConversation from "./singleConversation";
import { useQuery } from "react-query";
import { useContext } from "react";
import AppContext from "../../appContext";

const Conversations = () => {
  //fetching users/friends whom you can converse with
  const { user } = useContext(AppContext);

  const getUsers = async () => {
    const { data } = await axios.get("http://localhost:3500/user");

    const processedData = data.filter((friend) => friend._id !== user._id);
    return processedData;
  };
  const { data, isLoading, isError, error } = useQuery("users", getUsers);
  if (isLoading) {
    return (
      <div>
        <p>Laoding..</p>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <main style={{ marginTop: "5px" }}>
      {data.map((recipient) => {
        return <SingleConversation recipient={recipient} key={recipient._id} />;
      })}
    </main>
  );
};
export default Conversations;
