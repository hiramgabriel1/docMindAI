import { useParams } from "react-router-dom"
import Navbar from "./components/Navbar"
import { jwtDecode } from "jwt-decode"
// import PdfReader from "./components/PdfReader"

function Chat() {
  const { chatId } = useParams()
  const user = jwtDecode(userData || '')

  console.log(user);
  
  return (
    <>
        <Navbar />
        <p>{ chatId }</p>
    </>
  )
}

export default Chat