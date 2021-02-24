import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase';
import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch } from 'react-redux';
import { enterRoom } from '../features/appSlice';

export default function Sidebaroption({ Icon, title, addChannelOption, id }) {
    const [channels, loading, error] = useCollection(db.collection('rooms')) ;
    const dispatch = useDispatch();
    console.log(channels);

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name');

        if(channelName) {
            db.collection('rooms').add({
                name: channelName,
            })
        }
    };

    const selectChannel = () => {
        if (id) {
            dispatch(enterRoom({
                roomId: id,
            }));
        }
    };

    return (
        <div>
            <SidebaroptionContainer onClick={ addChannelOption ? addChannel : selectChannel }>
                {Icon && <Icon fontSixe="small" style={{ padding:10 }} />}
                {Icon ? (
                    <h3>{title}</h3>
                ): (
                    <SidebaroptionChannel>
                        <span>#</span> {title}
                    </SidebaroptionChannel>
                )}
            </SidebaroptionContainer>
        </div>
    );
}

const SidebaroptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;

    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }

    > h3 {
        font-weight: 500;
    }

    > h3 > span {
        padding: 15px;
    }
`;

const SidebaroptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;
`;