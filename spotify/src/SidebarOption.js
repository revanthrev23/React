import React from 'react';
import './SidebarOption.css';

export default function Sidebaroption({ title, Icon }) {
    

    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__Icon"/> }
            {Icon ? <h4>{title}</h4> : <p>{title}</p> }
        </div>
    )
}
