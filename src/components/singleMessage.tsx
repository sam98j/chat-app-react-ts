import { FC } from 'react';
import { useSelector } from 'react-redux';
import { MessageProps } from '../interfaces/components/message';
import { AppState, AuthState } from '../interfaces/store';
import styles from '../styles/components/message.module.scss' 

const SingleMessage: FC<MessageProps> = ({message}) => {
    const recevedMessage = {
        backgroundColor: "blue",
        color: "white",
        borderRadius: "0 10px 10px 10px"
    }
    const sendedMessage = {
        backgroundColor: "white",
        border: "1px solid gray",
        marginLeft: "auto",
        borderRadius: "10px 10px 0 10px"
    }
    // current user id
    const {user} = useSelector<AppState, AuthState>((state) => state.auth)
    const messDir = user?.id === message.reciver ? recevedMessage : sendedMessage
    return (
        <div className={styles.Message} style={messDir}>
            <p>{message.body}</p>
        </div>
    );
}
 
export default SingleMessage;