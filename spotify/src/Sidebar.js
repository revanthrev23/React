import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "./StateProvider";

export default function Sidebar() {
    const [{ playlists }, dispatch] = useStateValue();
    console.log(playlists.items);

    return (
        <div className="sideBar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <SidebarOption Icon={ HomeIcon } title="Home" />
            <SidebarOption Icon={ SearchIcon } title="Search" />
            <SidebarOption Icon={ LibraryMusicIcon } title="Your Library" />

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr className="hr" />            

            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} />
            ))}

        </div>
    )
}
