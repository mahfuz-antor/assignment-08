import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Team from './Components/Team/Team';
import TeamDetails from './Components/TeamDetails/TeamDetails';
import DetailPage from './Components/DetailPage/DetailPage';

function App() {
  return (
     <Router>
       <Switch>
         <Route exact path="/">
          <Home></Home>
          </Route>
         <Route path="/home">
          <Home></Home>
          </Route>
         <Route path="/team">
          <Team></Team>
         </Route>
         <Route path="/teamDetails/:teamId">
          <TeamDetails></TeamDetails>
         </Route>
         <Route path="/detailPage">
          <DetailPage></DetailPage>
         </Route>
        
       </Switch>
     </Router>
  );
}

export default App;
