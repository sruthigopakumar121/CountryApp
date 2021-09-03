
import './App.css';
import Signup from './Component/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import Details from './Component/Details';

function App() {
  return (
    <div className="App">
    <Router>
        
        <Switch>
          <Route path ="/" component={Signup}/>
          <Route exact path="/Details" component={Details} />

        </Switch>
    </Router>
    </div>
  );
}

export default App;
