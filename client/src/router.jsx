import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import App from './App';
import Home from './Home/index';

const router = (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/homepage" component={Home} />
    </div>
  </Router>
);

export default router;
