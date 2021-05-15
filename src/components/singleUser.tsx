import * as React from 'react';
import styles from '../styles/components/singleUser.module.scss'

export default function SingleUser(){
    return (
        <div className={styles.SingleUser}>
            <div className={styles.Avatar}></div>
            <h3 className={styles.Name}>HossamAlden</h3>
        </div>
    )
}