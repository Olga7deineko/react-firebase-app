import {FC, useContext} from 'react';
import {Box, Button, Card, CardContent, Container} from '@mui/material';
import {AuthContext} from '../../main.tsx';
import {signInWithPopup} from "firebase/auth";
const Login: FC = () => {
    const {auth, provider} = useContext(AuthContext)

    const signInWithGoogle = () => {
        signInWithPopup(auth,provider)
    };

    return (
        <Container>
            <Card sx={{ minWidth: 275, alignItems:"center", mt: '2%'}}>
                <CardContent>
                <Box p={5}>
                    <Button onClick={signInWithGoogle} variant={"outlined"}>Sign In With Google</Button>
                </Box>
                </CardContent>
            </Card>
        </Container>
    )
};
export default Login;