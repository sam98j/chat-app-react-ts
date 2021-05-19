import * as React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../interfaces/store';
import styles from '../styles/components/singleUser.module.scss'

const SingleUser: React.FC<{user: User}> = ({user}) => {
    const {_id, username,} = user;
    return (
        <Link to={`/chat/${_id}`}>
            <div className={styles.SingleUser}>
                <div className={styles.Avatar}></div>
                <h3 className={styles.Name}>{username}</h3>
            </div>
        </Link>
    )
}

export default SingleUser