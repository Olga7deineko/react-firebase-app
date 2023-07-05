import {FC, memo, useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {LOGIN_ROUTE, MAIN_ROUTE} from './constants/routes.ts';
import Login from './pages/Login';
import Main from './pages/Main';
import {AuthContext} from './main.tsx';
import {useAuthState} from 'react-firebase-hooks/auth';

const AppRoutes: FC = () => {
    const {auth} = useContext(AuthContext)
    const [user] = useAuthState(auth)

    if (!user) {
        return (
            <Routes>
                <Route path={LOGIN_ROUTE} element={<Login/>}/>
                <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace/>}/>
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path={MAIN_ROUTE} element={<Main/>}/>
            <Route path="*" element={<Navigate to={MAIN_ROUTE} replace/>}/>
        </Routes>
    );
};

export default memo(AppRoutes);