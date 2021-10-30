import initializeAuthentication from "../Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication()

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [name, setName] = useState('')
    const [user, setUser] = useState({})
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [useremail, setuserEmail] = useState("");
    const [userpassword, setuserPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    const getName = e => {
        setName(e.target.value);
    }

    const getEmail = e => {
        setEmail(e.target.value);
    }

    const getPassword = e => {
        setPassword(e.target.value);
    }

    const userEmail = e => {
        setuserEmail(e.target.value)
    }

    const userPassword = e => {
        setuserPassword(e.target.value)
    }

    const setUserInfo = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {
            window.location.reload();
        }).catch((error) => {
            setError(error.message)
        });
    }

    const userRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (email.length === 0) {
            setError("Please enter your email")
            return;
        }
        if (password.length === 0) {
            setError("Please enter a password");
            return;
        }
        if (password.length < 6) {
            setError("Password should be at least 6 charecters");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUserInfo(name);
                const user = result.user;
                console.log(user);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            })
    }

    const signInWithEmail = e => {
        e.preventDefault();
        if (useremail.length === 0) {
            setError("Please give your email")
            return;
        }
        if (userpassword.length === 0) {
            setError("Please give your password")
            return;
        }
        signInWithEmailAndPassword(auth, useremail, userpassword)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(result.user)
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
    }

    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     setUser(result.user);
        // })
        // .catch((error) => {
        //     setError(error.message)
        // }).finally(() =>
        //     setIsLoading(false)
        // );
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });

    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() =>
                setIsLoading(false)
            );
    }

    return { user, error, userRegistration, getName, getEmail, getPassword, userEmail, userPassword, signInWithEmail, googleSignIn, logOut, isLoading }

}

export default useFirebase;