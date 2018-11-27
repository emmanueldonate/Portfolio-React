import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landingpage';
//import About from './aboutme';
import Contact from './contact';
import Projects from './project';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/landingpage' component={Landing} />
        <Route path='/contact' component={Contact} />
        <Route path='/project' component={Projects} />
        <Route path='/resume' component={Resume} />
    </Switch>
);

export default Main;