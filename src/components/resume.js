import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                    <img 
                    src="https://avatars2.githubusercontent.com/u/25271150?s=460&v=4"
                    alt="avatar"
                    style={{height: '280px'}} 
                    />
                    </div>
                    
                    <h2 style={{paddingTop: '2em', color: 'white'}}>Emmanuel Donate</h2>
                    <h4 style={{color: 'white'}}>Software Developer</h4>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>Right Side</Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;