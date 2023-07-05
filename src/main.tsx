import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {firebaseConfig} from './firebaseConfig.ts';


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const initialAuthState = {
    auth: {},
    db: {},
    provider: {}
};

export const AuthContext = createContext<{
    auth: any,
    db: any,
    provider: any
}>(initialAuthState);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AuthContext.Provider value={{
            auth,
            db,
            provider
        }}>
            <App/>
        </AuthContext.Provider>
    </React.StrictMode>,
)
