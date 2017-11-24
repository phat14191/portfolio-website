import React from 'react';
import Navbar from './Navbar';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Project from './components/project/Project';
import Skills from './components/skills/Skills';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './app.css';

import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
        <MuiThemeProvider>
        <div className="App">
            <Navbar />
            <Switch>
                <Route exact path="/" component={About}/>
                <Route path="/portfolio" component = {Portfolio}/>
                <Route className="project" path="/project" component = {Project}/>
                <Route path="/skills" component = {Skills}/>
            </Switch>
        </div>
        </MuiThemeProvider>
    )
  }
}

export default App;
