import { Message } from "../pages/privateChat";

export interface PchatDataRes {
    messages: Message[],
    chattingWith: {
        _id: string | null,
        username: string | null,
        avatar: string | null
    }
}