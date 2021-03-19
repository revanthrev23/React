import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavouriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from '@material-ui/core';

export default function Swipebuttons(props) {
    

    return (
        <div className="swipeButtons">
            <IconButton className="swipeButton__replay" ><ReplayIcon fontSize="large" /></IconButton>
            <IconButton className="swipeButton__close" ><CloseIcon fontSize="large" /></IconButton>
            <IconButton className="swipeButton__star" ><StarRateIcon fontSize="large" /></IconButton>
            <IconButton className="swipeButton__favorite" ><FavouriteIcon fontSize="large" /></IconButton>
            <IconButton className="swipeButton__lightning" ><FlashOnIcon fontSize="large" /></IconButton>
        </div>
    )
}
