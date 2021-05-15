import * as React from 'react';
import { HomeState } from '../interfaces/pages/home';
import styles from '../styles/pages/home.module.scss'
import io, { Socket } from 'socket.io-client'
import SideBar from '../components/sideBar';
import UsersActions from '../actions/users'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../interfaces/store';
 
const Home = () => {
    const {getAllUsers} = new UsersActions();
    const dispatch = useDispatch();
    const AppState = useSelector<AppState, AppState>((AppState) => AppState)
    const [state, setState] = React.useState<HomeState>({
        io: {} as Socket
    })
    React.useEffect(() => {
        setState({
            ...state,
            io: io("http://localhost:5000")
        })
        dispatch(getAllUsers())
    }, []);
    return (
        <div className={styles.Home}>
            <SideBar users={AppState.users}/>
        </div>
    );
}
 
export default Home;