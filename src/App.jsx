import './App.css'
import { Route, Router, Switch } from 'wouter';
import Home from './components/Home';
import ToolDetail from './components/ToolDetail';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handlePopstate = () => {
      window.location.reload();
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

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
