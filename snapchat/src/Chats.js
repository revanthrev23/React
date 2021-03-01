import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import "./Chats.css"
import { auth, db } from './firebase';
import Chat from './Chat';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/appSlice';
import RadioButtonChecked from '@material-ui/icons/RadioButtonUnchecked';
import { useHistory } from 'react-router-dom';
import { resetCameraImage } from './features/cameraSlice';

export default function Chats(props) {
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => setPosts(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
        }))))
    }, [])

    const takeSnap = () => {
        dispatch(resetCameraImage);
        history.push('/');
    }

    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar src={user.profilePic} onClick={() => auth.signOut()} className="chats__avatar" />
                <div className="chats__search">
                    <SearchIcon className="chats__searchIcon"/>
                    <input placeholder="Friends" type="text" />
                </div>
                <ChatBubbleIcon className="chats__chatIcon"/>
            </div>
            <div className="chat__posts">
                {posts.map(({id, data: { profilePic, username, timestamp, imageUrl, read}}) => (
                    <Chat key={id} id={id} username={username} timestamp={timestamp} imageUrl={imageUrl} read={read} profilePic={profilePic} />
                ))}
            </div>
            <RadioButtonChecked className="chats__takePicIcon" onClick={takeSnap} fontSize="large" />
        </div>
    )
}
