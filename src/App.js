import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from "./container/Home/index";
import About from "./container/About/index";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>
  );
}

export default App;
