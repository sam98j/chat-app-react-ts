import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Message, PrivateChatProps, PrivateChatState } from '../interfaces/pages/privateChat';
import { AppState } from '../interfaces/store';
import send_message_icon from '../assets/icons/Send Icon.svg';
import styles from '../styles/pages/privateChat.module.scss'
import SingleMessage from '../components/singleMessage';
import DataActions from '../apis/data';

const PrivateChat: React.FC<PrivateChatProps> = ({socket_io}) => {
    const {data, users,auth} = useSelector<AppState, AppState>(AppState => AppState)
    // data actions
    const {setUserChatingWith, sendMessage} = new DataActions();
    // store dispatch method
    const dispatch = useDispatch()
    // componet state
    const [state, setState] = React.useState<PrivateChatState>({
        message: "",
        messages: [],
    })
    // when component did mount
    React.useEffect(() => {
        dispatch(setUserChatingWith(users[0]))
    }, [users])
    // usr input handler
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            message: e.target.value
        })
    }
    // send message handler
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const newMessage: Message = {
            body: state.message,
            reciver: data.pChatData.chattingWith._id!,
            sender: auth.user?.id!
        };
        dispatch(sendMessage(newMessage))
        setState({
            ...state,
            message: ""
        })
        socket_io.emit('message', newMessage)
    }
    // pChat messages
    const chatMessages = data.pChatData.messages;
    // chatting with username
    const {username} = data.pChatData.chattingWith;
    // return ui
    return (
        <div className={styles.private_chat}>
            <header className={styles.header}>
                <div className={styles.img}></div>
                <div className={styles.info}>
                    <h2>{username}</h2>
                    <p>last online 5 hourse age</p>
                </div>
            </header>
            <section className={styles.messages_box}>
                {chatMessages.map(message => <SingleMessage message={message} key={Math.random()}/>)}
            </section>
            <form className={styles.message_box} onSubmit={submitHandler}>
                <input type="text" placeholder="type your message" value={state.message} onChange={changeHandler}/>
                <button type="submit"><img src={send_message_icon} alt="" /></button>
            </form>
        </div>
    )
}
export default PrivateChat