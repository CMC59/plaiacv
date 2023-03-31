import React from 'react';
import { NavLink } from 'react-router-dom';
import Connect from '../firebase/firebase.auth';


const Navigation = () => {

    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idContent'>
                    <img src="./media/billGates.jpg" alt="profil-pic" />
                    <h3>Philippe Plaïa</h3>
                </div>
            </div>

            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className='fas fa-home'></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className='fas fa-graduation-cap'></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className='fas fa-images'></i>
                            <span>Porfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className='fas fa-address-book'></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <div className="connect">
                                <Connect />
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>


            <div className="signature">
                <p>Philippe Plaïa - Feb 2023</p>
            </div>

        </div >

    );
};

export default Navigation;