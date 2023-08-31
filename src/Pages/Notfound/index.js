import React from 'react';
import { Link } from 'react-router-dom'; 
import notfound from "../../Components/Utilis/images/404.png";

const Notfound = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1 style={{ color: '#FF664B', marginBottom: '20px' }}>Page not found</h1>
            <img src={notfound} alt="notfound" style={{ maxWidth: '100%', maxHeight: '300px', margin: '0 auto', marginBottom: '20px' }} />
            <Link to="/">
                <button style={{ backgroundColor: '#FF664B', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
                    Back to home
                </button>
            </Link>
        </div>
    );
};

export default Notfound;
