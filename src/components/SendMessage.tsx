import {FC, useContext, useState} from 'react'
import { collection, addDoc, serverTimestamp} from "firebase/firestore";
import {AuthContext} from '../main.tsx';
import {Button, Grid, TextField} from '@mui/material';

const SendMessage: FC = () => {
    const {auth, db} = useContext(AuthContext)
    const [msg, setMsg] = useState('')
    const messagesRef = collection(db, "messages");

    const sendMsg = async () => {
        const { uid, photoURL } = auth.currentUser

        await addDoc(messagesRef, {
            text: msg,
            createdAt: serverTimestamp(),
            uid: uid,
            photoURL: photoURL
        })
        setMsg('');
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={10}>
                <TextField
                    size="small"
                    fullWidth
                    placeholder="Type a message"
                    variant="outlined"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                />
            </Grid>
            <Grid item xs={2}>
                <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    onClick={sendMsg}
                >
                    Send
                </Button>
            </Grid>
        </Grid>
    )
}

export default SendMessage;