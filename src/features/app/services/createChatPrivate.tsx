import { customFetch } from "../../../utils/axios.config";

/**
 * this function is used to create a new chat
 *
 * @param chatUUID
 */
export const savePrivateChat = async (chatUUID: string) => {
    try {
        await customFetch.post('', chatUUID)

        // if(chatId.status === 201) console.log('');

    } catch (error) {
        console.error(error)
        throw new Error('error al guardar el chat')
    }
}