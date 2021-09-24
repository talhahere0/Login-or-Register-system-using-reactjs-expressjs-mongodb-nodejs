import React , {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './components/pages/Login/Login';
import Home from './components/pages/Homeindex/Home';
import Signup from './components/pages/Signup/Signup';
// import TopNavbar from './components/pages/Navbar/TopNavbar'
// import TopNavbar from './Pages/Navbar/TopNavbar';

function App() {
  const [user,setloginuser] = useState({})
  return (
    <>
      
      <Router>
    
        <Switch>
       
          
          <Route  exact path="/home">
          {
            user && user._id ? <Home/> : <Login setloginuser={setloginuser} />
          }</Route>
          <Route  path="/login">
          <Login setloginuser={setloginuser}/>
          </Route>
          <Route  path="/Signup">
          <Signup/>
          </Route>
           
          
        </Switch>
      
      </Router>
 
    </>
  );
}

export default App;