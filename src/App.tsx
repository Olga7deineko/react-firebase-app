import {FC, useContext} from 'react';
import './App.css'
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './AppRoutes.tsx';
import {AuthContext} from './main.tsx';
import {useAuthState} from 'react-firebase-hooks/auth';
import Navbar from './components/Navbar.tsx';
import {CircularProgress} from '@mui/material';

const App: FC = () => {
    const {auth} = useContext(AuthContext)
    const [, loading] = useAuthState(auth)

    if (loading) {
        return <CircularProgress />
    }

    return (
        <BrowserRouter>
            <Navbar/>
            <AppRoutes/>
        </BrowserRouter>
    );
}
export default App;
