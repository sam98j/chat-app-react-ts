import { Socket } from "socket.io-client";

export interface PrivateChatState {
    message: string;
    messages: Message[]
}

export interface Message {
    body: string;
    sender: string;
    reciver: string
}

export interface PrivateChatProps {
    socket_io: Socket
}