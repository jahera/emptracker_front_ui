// App.js
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container} from "react-bootstrap";
import Header from './components/Header';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Footer from './components/Footer';
import RoomsList from './rooms/RoomsList';

function App() {
return (
  
  <Router>
    <div>
      <Header/>
      <main className="py-3">
      <RoomsList />
      <Container>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/signin' component={Signin} />
        </Switch>
        </Container>
      </main>
    </div>
    <Footer/>
  </Router>
);
}

export default App

