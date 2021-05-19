import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import DataActions from '../actions/data';
import { AppState } from '../interfaces/store';
import styles from '../styles/pages/privateChat.module.scss'

const PrivateChat: React.FC<any> = () => {
    const {getPchatData} = new DataActions()
    const {recUserId} = useParams<{recUserId: string}>();
    const {data} = useSelector<AppState, AppState>(AppState => AppState)
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getPchatData(recUserId))
    }, [recUserId])
    return (
        <div className={styles.PrivateChat}>
            <nav>
                <div className={styles.Avatar}></div>
                <h3>{data.pChatData.username}</h3>
            </nav>
            <main></main>
            <footer></footer>
        </div>
    )
}
export default PrivateChat