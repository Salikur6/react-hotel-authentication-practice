import React from 'react';
import img404 from './404.jpg';

const NotFound = () => {
    // if (!alert("Fuck this shit I'm out")) document.location = '';

    // eslint-disable-next-line no-restricted-globals
    // if (confirm("Fuck this shit I'm out")) {
    //     window.location.href = "/"
    // } else (
    //     window.location.href = '/'
    // )
    return (
        <div>

            <img style={{ height: 'calc(100vh - 78px)', width: '100vw' }} src={img404} alt="" />
        </div>
    );
};





export default NotFound;