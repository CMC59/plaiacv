import '../Connect.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentification from '../firebase/firebase.init';
import { useState, useEffect } from 'react';
import { signOut } from "firebase/auth";


import { Button } from 'react-bootstrap';

initializeAuthentification();
const provider = new GoogleAuthProvider();

function Connect() {
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const auth = getAuth();

    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                setIsLoggedIn(true);
                setUser(user);
            } else {
                setIsLoggedIn(false);
            }
        });
    }, [auth]);

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
            }).catch(error => {
                console.log(error.message);
            });
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
            setIsLoggedIn(false);
            setUser({});
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="Connect">
            {isLoggedIn ? (
                <div>
                    <p className='userlog'>Bienvenue {user.displayName}</p>
                    <div className="pdf">
                        <a href="./media/CV.pdf" target="_blank">Télécharger CV</a>
                    </div>
                    <button className="clickConnect" onClick={handleSignOut}>Se déconnecter</button>
                </div>
            ) : (
                <Button className="clickConnect" onClick={handleGoogleSignIn}>Se connecter avec Google</Button>
            )}
        </div>
    );
}

export default Connect;
