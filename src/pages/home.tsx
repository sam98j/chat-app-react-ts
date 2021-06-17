import { HomeState } from '../interfaces/pages/home';
import styles from '../styles/pages/home.module.scss'
import io, { Socket } from 'socket.io-client'
import SideBar from '../components/sideBar';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../interfaces/store';
import PrivateChat from './privateChat';
import { useEffect, useState } from 'react';
import Chats from '../components/chats';
import UsersActions from '../apis/users';
import DataActions from '../apis/data';
import { Message } from '../interfaces/pages/privateChat';

const Home = () => {
    // dispatch function
    const dispatch = useDispatch();
    // users api
    const {getAllUsers} = new UsersActions()
    // data api
    const {reciveNewMessage} = new DataActions()
    // the whole state of the application
    const AppState = useSelector<AppState, AppState>((AppState) => AppState)
    // logcal state of the component
    const [state, setState] = useState<HomeState>({
        io: {} as Socket
    })
    // when componenct mount
    useEffect(() => {
        if(AppState.auth.user !== null) {
            const current_user_id = AppState.auth.user.id;
            setState({
                ...state,
                io: io(`http://localhost:5000/?_id=${current_user_id}`)
            })
        }
        dispatch(getAllUsers(AppState.auth.user?.id!))
    }, []);
    useEffect(() => {
        if(state.io.on !== undefined) {
            state.io.on("message_res", (message: Message) => {
                dispatch(reciveNewMessage(message))
            })
        }
    }, [state.io])
    // return the template
    return (
        <div className={styles.Home}>
            <SideBar />
            <div className={styles.MainArea}>
                <Chats />
                <PrivateChat socket_io={state.io}/>
            </div>
        </div>
    );
}
 
export default Home;