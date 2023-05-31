import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router-dom';


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
   

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/home')
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className="underline">New to To Do List <Link to='/signup'>Create a New Account</Link></p>
        </div>
    );
};

export default Login;