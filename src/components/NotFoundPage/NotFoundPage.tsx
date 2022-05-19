import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='container flex flex-col mx-auto'>
            <nav className='bg-orange-400 py-3 text-center'>
                <h4>Error 404</h4>
            </nav>
            <div className='text-center'>
                <span className='text-purple-600'>Ir a <Link to='/' className='text-lg underline'>Home</Link></span>
            </div>
        </div>
    )
};

export default NotFoundPage;