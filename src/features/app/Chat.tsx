import { useParams } from "react-router-dom"
import Navbar from "./components/Navbar"
// import PdfReader from "./components/PdfReader"

function Chat() {
  const { chatId } = useParams()
    
  return (
    <>
        <Navbar />
        <p>{ chatId }</p>
    </>
  )
}

export default Chat