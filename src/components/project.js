import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

        toggleCategories() {

    if(this.state.activeTab === 0){
        return(
            <div className="projects-grid">

            {/* React */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'white', height: '176px', background: 'url(https://thumbs.gfycat.com/BestMeagerHoki-size_restricted.gif) center / cover'}} >React Weather App</CardTitle>
            <CardText>REACT WEATHER APP</CardText>
            <CardActions border>
            <Button href="https://git.heroku.com/ed-weather-app.git" target="_blank" colored>App</Button>
            <Button href="https://github.com/emmanueldonate/startnow-react200-weather-app" target="_blank" colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://miro.medium.com/max/1120/1*yQPzM3BaubJgWQkoL29iOw.png) center / cover'}} >A To Do App</CardTitle>
            <CardText>REACT TO DO APP</CardText>
            <CardActions border>
            <Button href="https://ed-vstda.herokuapp.com/" target="_blank" colored>App</Button>
            <Button href="https://github.com/emmanueldonate/startnow-react100-vstda" target="_blank" colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://miro.medium.com/max/1120/1*yQPzM3BaubJgWQkoL29iOw.png) center / cover'}} >Budget Tracker App</CardTitle>
            <CardText>BUDGET TRACKER</CardText>
            <CardActions border>
            <Button href="https://github.com/emmanueldonate/startnow-react200-budget-tracker" target="_blank" colored>App</Button>
            <Button href="https://ed-budget-tracker.herokuapp.com/" target="_blank" colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>

            </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">

                {/* MongoDB */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKGiGIOGxKk-q_MHjQckZMBhmTLjHt72adlevUnIyXs8a8YhXcfQ) center / cover'}} >REact Project</CardTitle>
                <CardText>hjhbjhhhvgvggh g gvjhgvhg  ghgvjhgv gkhjvjhv jhv g vgvvg jhgvvjhgv jgvgvjgvj hg jh</CardText>
                <CardActions border>
                <Button colored>App</Button>
                <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKGiGIOGxKk-q_MHjQckZMBhmTLjHt72adlevUnIyXs8a8YhXcfQ) center / cover'}} >REact Project</CardTitle>
                <CardText>hjhbjhhhvgvggh g gvjhgvhg  ghgvjhgv gkhjvjhv jhv g vgvvg jhgvvjhgv jgvgvjgvj hg jh</CardText>
                <CardActions border>
                <Button colored>App</Button>
                <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKGiGIOGxKk-q_MHjQckZMBhmTLjHt72adlevUnIyXs8a8YhXcfQ) center / cover'}} >REact Project</CardTitle>
                <CardText>hjhbjhhhvgvggh g gvjhgvhg  ghgvjhgv gkhjvjhv jhv g vgvvg jhgvvjhgv jgvgvjgvj hg jh</CardText>
                <CardActions border>
                <Button colored>App</Button>
                <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
    
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div className="projects-grid">

                {/* Express */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}} >REact Project</CardTitle>
                <CardText>hjhbjhhhvgvggh g gvjhgvhg  ghgvjhgv gkhjvjhv jhv g vgvvg jhgvvjhgv jgvgvjgvj hg jh</CardText>
                <CardActions border>
                <Button colored>App</Button>
                <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}} >REact Project</CardTitle>
                <CardText>hjhbjhhhvgvggh g gvjhgvhg  ghgvjhgv gkhjvjhv jhv g vgvvg jhgvvjhgv jgvgvjgvj hg jh</CardText>
                <CardActions border>
                <Button colored>App</Button>
                <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}} >REact Project</CardTitle>
                <CardText>hjhbjhhhvgvggh g gvjhgvhg  ghgvjhgv gkhjvjhv jhv g vgvvg jhgvvjhgv jgvgvjgvj hg jh</CardText>
                <CardActions border>
                <Button colored>App</Button>
                <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
    
                </div>
            )
        } else if(this.state.activeTab === 3) {
            return(
                <div className="projects-grid">

                {/* PYTHON */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background: 'url(https://media2.giphy.com/labs/images/giphypop-python-library.gif) center / cover'}} >Python Project</CardTitle>
                <CardText>hjhbjhhhvgvggh g gvjhgvhg  ghgvjhgv gkhjvjhv jhv g vgvvg jhgvvjhgv jgvgvjgvj hg jh</CardText>
                <CardActions border>
                <Button colored>App</Button>
                <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*WHf2-YddJQ1wdBGOvAo8Gw.gif) center / cover'}} >REact Project</CardTitle>
                <CardText>hjhbjhhhvgvggh g gvjhgvhg  ghgvjhgv gkhjvjhv jhv g vgvvg jhgvvjhgv jgvgvjgvj hg jh</CardText>
                <CardActions border>
                <Button colored>App</Button>
                <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*WHf2-YddJQ1wdBGOvAo8Gw.gif) center / cover'}} >REact Project</CardTitle>
                <CardText>hjhbjhhhvgvggh g gvjhgvhg  ghgvjhgv gkhjvjhv jhv g vgvvg jhgvvjhgv jgvgvjgvj hg jh</CardText>
                <CardActions border>
                <Button colored>App</Button>
                <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
    
                </div>
            )
        } else if(this.state.activeTab === 4) {
            return(
                <div className="projects-grid">

                {/* ANGULAR */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://stephencollie.net/wp-content/uploads/2018/01/AngularJS.png) center / cover'}} >REact Project</CardTitle>
                <CardText>hjhbjhhhvgvggh g gvjhgvhg  ghgvjhgv gkhjvjhv jhv g vgvvg jhgvvjhgv jgvgvjgvj hg jh</CardText>
                <CardActions border>
                <Button colored>App</Button>
                <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://stephencollie.net/wp-content/uploads/2018/01/AngularJS.png) center / cover'}} >REact Project</CardTitle>
                <CardText>hjhbjhhhvgvggh g gvjhgvhg  ghgvjhgv gkhjvjhv jhv g vgvvg jhgvvjhgv jgvgvjgvj hg jh</CardText>
                <CardActions border>
                <Button colored>App</Button>
                <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://stephencollie.net/wp-content/uploads/2018/01/AngularJS.png) center / cover'}} >REact Project</CardTitle>
                <CardText>hjhbjhhhvgvggh g gvjhgvhg  ghgvjhgv gkhjvjhv jhv g vgvvg jhgvvjhgv jgvgvjgvj hg jh</CardText>
                <CardActions border>
                <Button colored>App</Button>
                <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
    
                </div>
            )
        }
}

    render() {
        return(
            <div className="category-tab">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
                <Tab style={{color: 'white'}}>React</Tab>
                <Tab style={{color: 'white'}}>MongoDB</Tab>
                <Tab style={{color: 'white'}}>Express</Tab>
                <Tab style={{color: 'white'}}>Python</Tab>
                <Tab style={{color: 'white'}}>Angular</Tab>
            </Tabs>
    
                <Grid>
                <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
                </Cell>
                </Grid>
            </div>
        )
    }
}
export default Projects;