import * as React from 'react';
import styles from '../styles/components/sideBar.module.scss'
import SingleUser from './singleUser';

export default function SideBar () {
    return (
        <div className={styles.SideBar}>
            <SingleUser />
        </div>
    )
}