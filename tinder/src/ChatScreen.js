import React from 'react'
import { useState } from 'react'
import "./ChatScreen.css"
import Avatar from "@material-ui/core/Avatar";

export default function Chatscreen(props) {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Virat Kohli',
            image: 'https://media.gettyimages.com/photos/virat-kohli-of-india-poses-during-the-india-test-squad-portrait-on-picture-id1076435414?k=6&m=1076435414&s=612x612&w=0&h=cTGUPR81SY4-RWT_0UMH1oNeQkL2h08CeLim8x11liA=',
            message: 'Whats up ?'
        },
        {
            name: 'Virat Kohli',
            image: 'https://media.gettyimages.com/photos/virat-kohli-of-india-poses-during-the-india-test-squad-portrait-on-picture-id1076435414?k=6&m=1076435414&s=612x612&w=0&h=cTGUPR81SY4-RWT_0UMH1oNeQkL2h08CeLim8x11liA=',
            message: 'Hows it going ?'
        },
        {
            message: 'Hey! Lets catch up soon!'
        }
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message:input }]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED VIRAT KOHLI ON 10/03/2021</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
                    <p className="chatScreen__text" >{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                    <p className="chatScreen__textUser" >{message.message}</p>
                </div>
                )
            ))}

            <div>
                <form className="chatsScreen__input">
                    <input value={input} onChange={ e => setInput(e.target.value) } className="chatScreen__inputField" placeholder="Type a Message" type="text" />
                    <button type="submit" onClick={handleSend} className="chatsScreen__button">SEND</button>
                </form>
            </div>
        </div>
    )
}
