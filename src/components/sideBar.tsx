import * as React from 'react';
import { SideBarProps } from '../interfaces/components/sideBar';
import styles from '../styles/components/sideBar.module.scss'
import SingleUser from './singleUser';

export const SideBar: React.FC<SideBarProps>  = ({users}) => {
    return (
        <div className={styles.SideBar}>
            {users.map((user: any) => <SingleUser />)}
        </div>
    )
}

export default SideBar