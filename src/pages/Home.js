import React from 'react';
import Navigation from '../components/Navigation';
import Connect from '../firebase/firebase.auth';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Philippe Plaïa</h1>
                    <h2>Développeur Web</h2>




                </div>

            </div>
        </div>
    );
};

export default Home;