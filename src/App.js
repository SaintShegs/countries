import './App.css';
import Countries from './Countries';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Header';
import Country_info from './Country_info';



function App() {



  return (
    <div>  
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Countries} />
        </Switch>
        <Switch>
          <Route path='/Country-Info/:country_info' component={Country_info} />
        </Switch>
      </Router>


     
      
    </div>
  );
}

export default App;
