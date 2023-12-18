import './App.css'
import { Route, Router, Switch } from 'wouter';
import Home from './components/Home';
import ToolDetail from './components/ToolDetail';

function App() {
  return (
    <Router>
        <Switch>
            <Route component={Home} path="/" />
            <Route component={ToolDetail} path="/field/:tool" />
        </Switch>
    </Router>
  )
}

export default App;
