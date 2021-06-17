import { useSelector } from 'react-redux'
import { AppState, User } from '../interfaces/store'
import styles from '../styles/components/chats.module.scss'
import ChatCard from './chatCard'
import ChatSearch from './chatSearch'

export default function Chats(){
    const {users} = useSelector<AppState, AppState>((state) => state);
    return(
        <section className={styles.chats}>
            <div className={styles.header}>
                <h1>Chats</h1>
                <a href="">Start New Chat</a>
            </div>
            <ChatSearch />
            {users.map((user: User) => <ChatCard key={user._id} user={user}/>)}
        </section>
    )
}