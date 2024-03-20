import React from "react";
import SideBar from "./components/SideBar";
import ChatContainer from "./components/ChatContainer";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <ChatContainer />
    </div>
  );
}

export default App;
