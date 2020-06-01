import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Premium from './pages/Premium'
import DevSchool from './pages/DevSchool'
import AxiosCourse from './pages/AxiosCourse'
import ReduxCourse from './pages/ReduxCourse'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <Link className="navbar-brand" to="/">Codepolitan</Link>
            <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/">Home</Link>
                <Link className="nav-item nav-link" to="/premium">Premium</Link>
                <Link className="nav-item nav-link" to="/devschool">DevSchool</Link>
                <Link className="nav-item nav-link" to="/axios">Axios</Link>
                <Link className="nav-item nav-link" to="/redux">Redux</Link>
            </div>
          </nav>
          <div style={{ paddingTop: 60}}>
            <Route path="/" exact component={Home}></Route>
            <Route path="/premium" component={Premium}></Route>
            <Route path="/devschool" component={DevSchool}></Route>
            <Route path="/axios" component={AxiosCourse}></Route>
            <Route path="/redux" component={ReduxCourse}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
