import Cookies from "js-cookie";
import { CustomJWTPayload } from "./Application";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import ChatsCards from "./components/ChatsCards";

function MyChats() {
  const [chats, setChats] = useState();

  useEffect(() => {
    const data = Cookies.get("authToken");
    const userData = jwtDecode<CustomJWTPayload>(data);

    if (userData) setChats(userData);
  }, []);

  useEffect(() => {
    console.log(chats?.chats);
  }, [chats]);
  
  return (
    <>
      <h1 className="text-2xl ml-3 mt-4">list to my chats</h1>
      <div className="flex items-center justify-center h-screen">
        {chats?.chats.length >= 1 ? (
          <ChatsCards dataChats={chats?.chats}/>
        ) : (
          <h1 className="text-3xl font-semibold">You don't have chats</h1>
        )}
      </div>
    </>
  );
}

export default MyChats;
