import Cookies from "js-cookie";
import { CustomJWTPayload } from "./Application";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

function MyChats() {
  const [chats, setChats] = useState()

  const data = Cookies.get('authToken')
  const userData = jwtDecode<CustomJWTPayload>(data)
  console.log(userData.chats);

  setChats(userData.chats)
  return (
    <>
    </>
  )
}

export default MyChats