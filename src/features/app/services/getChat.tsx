import { customFetch } from "../../../utils/axios.config";

/**
 * this function is used to get a specific chat
 *
 * @param userId
 * @param chatId
 * @returns
 */
export const getChatData = async (
	userId: string | undefined,
	chatId: string | undefined
) => {
	try {
		const query = await customFetch.get(`/chat/view/${chatId}/user/${userId}`);

		console.log(query.data);

		return query.data;
	} catch (error) {
		console.log(error);
		throw new Error("error al consumir data de chat");
	}
};
