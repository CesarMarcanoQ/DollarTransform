import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './main/Main'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact><Main /></Route>
        <Route path="*"></Route>
      </Switch>
    </Router>
  );
}

export default App;
