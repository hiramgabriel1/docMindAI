import { useParams } from "react-router-dom";
import { getChatData } from "./services/getChat";
import { useEffect, useState } from "react";

function UserChat() {
  const { userId, chatId } = useParams();
  const [chatData, setChatData] = useState(null);
  const getData = async () => {

    if (userId && chatId) {
      try {
        const data = await getChatData(userId, chatId);
        setChatData(data);
      } catch (error) {
        console.error("Error al obtener datos del chat:", error);
      }
    }
  };

  useEffect(() => {
    getData()
  }, [])

  if (!chatData) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Chat Data</h1>
      <pre>{JSON.stringify(chatData.data, null, 2)}</pre>
    </div>
  );
}

export default UserChat;
