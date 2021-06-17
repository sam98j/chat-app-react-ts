import { useSelector } from 'react-redux'
import { AppState } from '../interfaces/store'
import styles from '../styles/components/sideBar.module.scss'

export const SideBar = () => {
    const {auth} = useSelector<AppState, AppState>(state => state)
    return (
        <div className={styles.SideBar}>
            <div className={styles.user}>
                <div className={styles.img}></div>
                <h2 className={styles.name}>{auth.user?.username}</h2>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>Home</li>
                <li className={styles.link}>Chat</li>
                <li className={styles.link}>Contact</li>
                <li className={styles.link}>Notification</li>
                <li className={styles.link}>Calender</li>
                <li className={styles.link}>Settings</li>
            </ul>
        </div>
    )
}

export default SideBar