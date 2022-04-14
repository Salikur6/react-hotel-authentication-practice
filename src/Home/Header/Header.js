import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link to='/' className="navbar-brand fw-bold fw-bold">Salik Hotel</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                <li className="nav-item">

                                    <Link to='/' className='nav-link text-primary fw-bold p-3 fs-5'>Home</Link>

                                </li>
                                <li className="nav-item">

                                    <Link to='/checkout' className='nav-link text-primary fw-bold p-3 fs-5'>Checkout</Link>

                                </li>
                                <li className="nav-item">

                                    <Link to='/register' className='nav-link text-primary fw-bold p-3 fs-5'>Register</Link>

                                </li>
                                <li className="nav-item">

                                    <Link to='/login' className='nav-link text-primary fw-bold p-3 fs-5'>Login</Link>

                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;