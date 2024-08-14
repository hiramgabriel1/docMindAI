import { BrowserRouter, Routes, Route } from "react-router-dom";
import Application from "./features/app/Application";
import NotFound from "./errors/NotFound";
import Chat from "./features/app/Chat";
import UserChat from "./features/app/UserChat";
import MyChats from "./features/app/MyChats";

function App() {
  return (
    <>
      <BrowserRouter basename="/app"> 
        <Routes>
          <Route path="/starter" element={<Application />} />
          <Route path="/new-chat/:chatId" element={<Chat />} />
          <Route path="/view-chat/:chatId" element={<UserChat />} />
          <Route path="/my-chats/:userId" element={<MyChats />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
