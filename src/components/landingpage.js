import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}></Cell>
                    <div className="banner-text">
                    <h1>Full Stack Web Developer</h1>
                    <hr />
                    <p>MongoDB | Express | React | React-Native | Node.JS | MySQL | HTML/CSS</p>
                    <div className="social-links">

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/emmanuel-donat%C3%A9/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>

                     {/* GitHub */}
                     <a href="https://github.com/emmanueldonate" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                    </a>

                     {/* Youtube */}
                     <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-twitter-square" aria-hidden="true" />
                    </a>

                    {/* Hooli */}
                 <a href="http://www.piedpiper.com/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-pied-piper-pp" aria-hidden="true" />
                    </a>

                    </div>
                    </div>
                </Grid>
            </div>
        )
    }
}
export default Landing;