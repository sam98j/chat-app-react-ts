import * as React from 'react';
import { useDispatch } from 'react-redux';
import AuthActions from '../apis/auth';
import { LoginState } from '../interfaces/pages/login';
import styles from '../styles/pages/login.module.scss';

const Login = () => {
    const {login} = new AuthActions();
    // component state 
    const [state, setState] = React.useState<LoginState>({
        isLoading: false,
        credentials: {
            username: "",
            password: ""
        }
    });
    const dispatch = useDispatch()
    // handle inputs
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            credentials: {
                ...state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }
    // handle form submition
    const handleSubmition = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login(state.credentials))
    }
    return (
        <div className={styles.Login}>
            <form className={styles.FormBody} onSubmit={handleSubmition}>
                <h2>Welcome, Login to your account</h2>
                <div>
                    <div className={styles.InputContainer}>
                        <input type="text" name="username" value={state.credentials.username} onChange={handleInputChange}/>
                    </div>
                    <div className={styles.InputContainer}>
                        <input type="password" name="password" value={state.credentials.password} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className={styles.ButtonContainer}>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login