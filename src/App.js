import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import GridCalculator from './components/GridCalculator';
import Navbar from './components/Navbar/Navbar'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";

function App() {
  return (
     <Router>
        <div>
           <ul>
              <li>
                 <Link to="/">Home</Link>
              </li>
              <li>
                 <Link to="/grid">Grid</Link>
              </li>
           </ul>
         <Switch>
            <Route exact path="/">
               <Calculator/>
            </Route>
            <Route path="/grid">
               <GridCalculator/>
            </Route>
         </Switch>
        </div>
     </Router>
       );
   {/* <div>
      <Navbar/>
      <div className="container">
         <div className="row">
            <div className="col">
               <Calculator />
            </div>
         </div>
      </div>
   </div> */}
    
}

export default App;
