import React from 'react'
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import "./Header.css";
import { IconButton } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default function Header({ backbutton }) {
    const history = useHistory();

    return (
        <div className="header">

            {backbutton ? (
                <IconButton onClick={() => history.replace(backbutton)}><ArrowBackIosIcon fontSize="large" className="header__icon" /></IconButton>
            ):(
                <IconButton><PersonIcon fontSize="large" className="header__icon" /></IconButton>
            )}

            <Link to="/"><img src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" className="header__logo" alt="tinder logo" /></Link>
            <Link to="/chat"><IconButton><ForumIcon fontSize="large" className="header__icon" /></IconButton></Link>
        </div>
    )
}
