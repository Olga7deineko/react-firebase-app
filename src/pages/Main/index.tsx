import {FC, useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../main.tsx';
import {Box} from '@mui/material';
import {collection, query, limit, orderBy, onSnapshot} from "firebase/firestore";
import SendMessage from '../../components/SendMessage.tsx';
import Message from '../../components/Message.tsx';


const Main: FC = () => {
    const {auth, db} = useContext(AuthContext)
    const [messages, setMessages] = useState<any[]>([])
    const userID = auth.currentUser.uid;


    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
            let mess: any[] = [];
            QuerySnapshot.forEach((doc) => {
                mess.push({...doc.data(), id: doc.id});
            });
            setMessages(mess)

        });
        return () => data();

    }, []);
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                bgcolor: "grey.200",
            }}
        >
            <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
                    {messages && messages.map((message, id) =>
                        <Message  key={id} message={message} userID={userID}></Message>
                    )}
                </Box>
            <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <SendMessage/>
            </Box>
        </Box>
    );
};
export default Main;