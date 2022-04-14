import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                navigate(from, { replace: true });
            }).catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage);
            })


    }


    const handleGoogleBtn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            }).catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage);
            })

    }

    return (
        <div className='container mt-5'>

            <h2 className='mb-4 fw-bold text-center'>Login to your account</h2>

            {user?.uid ? <h2 className='fw-bold text-center text-danger'>{user.displayName} is Logged in</h2> : ''}
            <Form onSubmit={handleSubmit}>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>

                {error ? <h5 className='text-danger fw-bold my-4'>{error}</h5> : ''}
                <Button variant="primary" type="submit" className='mt-3'>
                    Submit
                </Button>

                <h5 className='mt-4 text-center fw-bold'>If you don't have an account, <Link to='/register'>click on Register.</Link></h5>
            </Form>

            <div className='text-center'>
                <button onClick={handleGoogleBtn} className='mt-5 btn btn-danger text-white fw-bold '>Sign in with Google</button>


            </div>
        </div>
    );
};

export default Login;