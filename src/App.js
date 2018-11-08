import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl/';
import Main from './components/main';
import Footer from './components/footer';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div style={{height: '100vh',width:'100vw', position: 'relative'}}>
      <Layout style={{background: 'url(/images/bg.jpg) center / cover'}}>
          <Header className= "header-color" transparent title="Emmanuel Donate" style={{color: 'white'}}>
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/project">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
              <i class="fa fa-circle-o-notch fa-spin"></i>
          </Header>
          <Drawer title="Emmanuel Donate">
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/project">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
            <Main />
          </Content>
          <Footer />
      </Layout>
  </div>
    );
  }
}

export default App;
