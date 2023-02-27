import ChatContainer from "./Components/chatContainer";
import { QueryClient, QueryClientProvider } from "react-query";
import SignUp from "./Components/signUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.scss";
import AppContext from "./appContext";
import { useContext } from "react";
import Login from "./Components/login";

function App() {
  const queryClient = new QueryClient();
  const { user } = useContext(AppContext);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={user ? <ChatContainer /> : <Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
       
      </div>
    </QueryClientProvider>
  );
}

export default App;
