import {FC, useContext} from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';
import {AuthContext} from '../main.tsx';
import {useAuthState} from 'react-firebase-hooks/auth';

const Navbar: FC = () => {
    const {auth} = useContext(AuthContext)
    const [user] = useAuthState(auth)
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        React FireBase
                    </Typography>
                    {user && (
                        <Button color="inherit" onClick={() => auth.signOut()}>Sign out</Button>
                    )
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;