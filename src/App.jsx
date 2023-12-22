// App.js
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container} from "react-bootstrap";
import { API_URL } from "./constants";
import Header from './components/Header';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Footer from './components/Footer';
import RoomsList from './rooms/RoomsList';
import CreateNewRoom from './rooms/CreateNewRoom';

//import AuthProvider from '/Authprovider';

function App() {
return (
  
  <Router>
    <Header/>
    <div>
      <main className="py-3">
        <Container>
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/roomlist' component={RoomsList} />
            <Route exact path='/createnewroom' component={CreateNewRoom} />
          </Switch>
        </Container>
      </main>
    </div>
    <Footer/>

  </Router>
);
}

export default App

//<Route path="/" element={isExpired(localStorage.getItem('token') ? <FilmList/> : <LoginForm/> )} />