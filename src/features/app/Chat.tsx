import Navbar from "./components/Navbar";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function Chat() {
	const [chats, setChats] = useState([]);
	const cookieUser = Cookies.get("authToken");

	useEffect(() => {
		if (cookieUser) {
			const userData = jwtDecode(cookieUser);
			// @ts-expect-error ignore
			setChats(userData);
		}
	}, [cookieUser]);

	useEffect(() => {
		console.log("archivo:", chats);
	}, [chats]);

	return (
		<>
			<Navbar />
			<p>My chats list</p>
		</>
	);
}

export default Chat;
