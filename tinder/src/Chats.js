import React from 'react'
import Chat from './Chat'
import "./Chats.css"

export default function Chats() {
    

    return (
        <div className="chats">
            <Chat
                name="Virat Kohli"
                message="Hey! Howa you?"
                timestamp="35 minutes ago"
                profilePic="https://media.gettyimages.com/photos/virat-kohli-of-india-poses-during-the-india-test-squad-portrait-on-picture-id1076435414?k=6&m=1076435414&s=612x612&w=0&h=cTGUPR81SY4-RWT_0UMH1oNeQkL2h08CeLim8x11liA="
                />
            <Chat 
                name="Zayn Malik"
                message="Whats up? :)"
                timestamp="3 days ago"
                profilePic="https://media.gettyimages.com/photos/recording-artist-zayn-malik-of-one-direction-attends-the-clive-davis-picture-id911192560?k=6&m=911192560&s=612x612&w=0&h=kswwiTDKjTCrqXL-L_v9aFKNuqNppSbBUwytFF3Q6KE="
                />
            <Chat
                name="Elon Musk"
                message="DOGE COIN YO!"
                timestamp="1 week ago"
                profilePic="https://media.gettyimages.com/photos/of-tesla-and-space-x-elon-musk-attends-the-2015-vanity-fair-oscar-picture-id464172224?k=6&m=464172224&s=612x612&w=0&h=M9Wf9-mcTJBLRWKFhAX_QGVAPXogzxyvZeCiIV5O3pw="
                />
        </div>
    )
}
