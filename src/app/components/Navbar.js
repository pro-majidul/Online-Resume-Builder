import React from 'react';

const Navbar = () => {
    return (
        <nav>
           <ul className='flex items-center justify-center gap-5'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Service</li>
            </ul> 
        </nav>
    );
};

export default Navbar;