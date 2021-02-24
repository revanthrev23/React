import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import React from 'react'
import styled from "styled-components";
import Sidebaroption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

export default function Sidebar(props) {

    const [channels, loading, error] = useCollection(db.collection('rooms')) ;
    const [user] = useAuthState(auth);

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>YourSpace HQ</h2>
                    <h3>
                    <FiberManualRecordIcon />
                    Revanth
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>

            <Sidebaroption Icon={InsertCommentIcon} title="Threads" />
            <Sidebaroption Icon={InboxIcon} title="Mentions & reactions" />
            <Sidebaroption Icon={DraftsIcon} title="Saved Items" />
            <Sidebaroption Icon={BookmarkBorderIcon} title="Channel Browser" />
            <Sidebaroption Icon={PeopleAltIcon} title="People & User groups" />
            <Sidebaroption Icon={AppsIcon} title="Apps" />
            <Sidebaroption Icon={FileCopyIcon} title="File Browser" />
            <Sidebaroption Icon={ExpandLessIcon} title="Show Less" />
            <hr />
            <Sidebaroption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <Sidebaroption Icon={AddIcon} addChannelOption title="Add Channel" />
            {channels?.docs.map(doc => (
                <Sidebaroption key={doc.id} id={doc.id} title={doc.data().name} />
            ))}
        </SidebarContainer>
    );
}

const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;

const SidebarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 13px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;