import { customFetch } from "../../../utils/axios.config";

export const savePrivateChat = async (chatUUID: string) => {
    try {
        const chatId = await customFetch.post('', chatUUID)

        if(chatId.status === 201) console.log('');
        
    } catch (error) {
        console.error(error)
        throw new Error('error al guardar el chat')
    }
}