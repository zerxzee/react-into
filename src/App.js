import { Login } from './components/Login';
import { Main } from './components/Main';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className='container'>
        <Route path='/' exact component={Login}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/home' component={Main} private></Route>
      </div>
    </Router>
  );
}
