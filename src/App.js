import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './main/Main'
import E404 from './404/E404'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact><Main /></Route>
        <Route path="*"><E404 /></Route>
      </Switch>
    </Router>
  );
}

export default App;
