import { FC } from 'react';
import { useDispatch } from 'react-redux';
import DataActions from '../apis/data';
import { ChatCardProps } from '../interfaces/components/chatCard';
import styles from '../styles/components/chatCard.module.scss';

const ChatCard: FC<ChatCardProps> = ({user}) => {
    const {_id, username, online} = user;
    const dispatch = useDispatch();
    const {setUserChatingWith} = new DataActions();
    const clickHandler = () => {
        dispatch(setUserChatingWith(user))
    }
    // show online indecator
    const isOnline = online ? 'inline-block' : '';
    return (
        <div className={styles.chat_card} onClick={clickHandler}>
            <div className={styles.header}>
                <div className={styles.img}>
                    <span className={styles.indecator} style={{display: isOnline}}></span>
                </div>
                <div className={styles.info}>
                    <h2>{username}</h2>
                    <p>1 minute age</p>
                </div>
            </div>
            <p className={styles.message}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi beatae totam ducimus aliquam ipsam, unde minima quae impedit nam reprehenderit.</p>
        </div>
    )
}

export default ChatCard