import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Registar = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [customError, setCustomError] = useState('');

    console.log(name)

    const [createUserWithEmailAndPassword, error] = useCreateUserWithEmailAndPassword(auth);




    const handleName = event => {
        setName(event.target.value);
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        createUserWithEmailAndPassword(email, password);

        if (name === '') {
            setCustomError('Please Fill the input box.')
        } else {
            setCustomError('');
        }



    }





    return (

        <div className='container my-5'>
            <h2 className='mb-4 fw-bold text-center'>Create an Account</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" placeholder="Enter Name" />
                    {customError && <h6 className='text-danger'>{customError}</h6>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>


                {error ? <h5 className='text-danger'>{error?.message}</h5> : ''}

                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <h5 className='my-4 fw-bold text-center'>If you already have an account, <Link to='/login'>click on login</Link></h5>
            </Form>


        </div>
    );
};

export default Registar;