import Cookies from "js-cookie";
import { CustomJWTPayload } from "./Application";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import ChatsCards from "./components/ChatsCards";

function MyChats() {
	const [chats, setChats] = useState();

	useEffect(() => {
		const data = Cookies.get("authToken");
		if (data) {
			const userData = jwtDecode<CustomJWTPayload>(data);
			if (userData) {
				// @ts-expect-error ignore
				setChats(userData);
			}
		}
	}, []);

	return (
		<>
			<h1 className="text-2xl ml-3 mt-4">list to my chats</h1>
			<div className="flex items-center justify-center h-screen">
				{/* @ts-expect-error ignore */}
				{chats?.chats.length >= 1 ? (
					// @ts-expect-error ignore
					<ChatsCards dataChats={chats?.chats} />
				) : (
					<h1 className="text-3xl font-semibold">You don't have chats</h1>
				)}
			</div>
		</>
	);
}

export default MyChats;
