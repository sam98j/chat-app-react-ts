import * as React from 'react';
import { SideBarProps } from '../interfaces/components/sideBar';
import { User } from '../interfaces/store';
import styles from '../styles/components/sideBar.module.scss'
import SingleUser from './singleUser';

export const SideBar: React.FC<SideBarProps>  = ({users}) => {
    return (
        <div className={styles.SideBar}>
            {users.map((user: User) => <SingleUser key={user._id} user={user}/>)}
        </div>
    )
}

export default SideBar