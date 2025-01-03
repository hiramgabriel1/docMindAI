import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Application from "./features/app/Application";
import NotFound from "./errors/NotFound";
import Chat from "./features/app/Chat";
import UserChat from "./features/app/UserChat";
import MyChats from "./features/app/MyChats";
import Login from "./features/login/Login";
import Register from "./features/login/Register";

function App() {
	return (
		<BrowserRouter basename="/app">
			<Routes>
        {/* default route */}
				<Route path="/" element={<Navigate to="/starter" replace />} />
				<Route path="/starter" element={<Application />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/new-chat/:chatId" element={<Chat />} />
				<Route path="/user/:userId/view-chat/:chatId" element={<UserChat />} />
				<Route path="/my-chats/:userId" element={<MyChats />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
