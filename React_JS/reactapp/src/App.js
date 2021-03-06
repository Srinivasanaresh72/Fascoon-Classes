import logo from './logo.svg';
import './App.css';
import Userslist from './Components/Userslist';
import CreateUser from './Components/CreateUser';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import EditUser from './Components/EditUser';
import Navigation from './Components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
    <Switch>
      <Route exact path="/" component={Userslist} />
      <Route exact path="/createuser" component={CreateUser} />
      <Route exact path="/editUser/:id/:name" component={EditUser} />
    </Switch>
    </Router>

  );
}

export default App;
