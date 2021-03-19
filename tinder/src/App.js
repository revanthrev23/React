import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Chats from './Chats';
import Chatscreen from './ChatScreen';
import Header from './Header';
import Swipebuttons from './SwipeButtons';
import Tindercards from './TinderCards';


function App() {
  return (
    <div className="App">
      <Router>
              <Switch>
                  <Route path="/chat/:person">
                      <Header backbutton="/chat" />
                      <Chatscreen />
                  </Route>
                  <Route path="/chat">
                      <Header backbutton="/" />
                      <Chats />
                  </Route>
                  <Route path="/">
                      <Header />
                      <Tindercards />
                      <Swipebuttons />
                  </Route>
              </Switch>
      </Router>
    </div>
  );
}

export default App;
