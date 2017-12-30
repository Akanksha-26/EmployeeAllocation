import React,{Component} from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Dragula from 'react-dragula';
import './index.css';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {fetchProjects} from '../../Actions/projectActions'
import Project from '../../Components/project';

class Home extends Component{
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render = () => {
    let { fetchProjects, projects } = this.props;

    let projectDivs = projects.length > 0 ? projects.map(project => {
      return <Project key={project.id} project={project}/>
    }) : <div>Empty</div>

    return (
      <div>
        <div className="App">
          <h3 className="App-intro">
            Employee Project Allocation
          </h3>
          <div className="search">
            <div className="search__input__wrapper">
              <input type="text" className="search__input"/>
            </div>
            <div className="filter">
              <div  onClick={this.handleClick}>
                <svg viewBox="0 0 465.005 465.005" width="30px" height="45px">
                  <g transform="translate(0 -540.36)">
                    <g>
                      <g>
                        <path d="M440.105,565.363h-16.2c-0.3,0-0.7,0-1,0.1c-0.3,0-0.7-0.1-1-0.1H7.505c-2.7,0-5.3,1.5-6.6,3.9c-1.3,2.4-1.2,5.3,0.3,7.6     l164.3,255.6v140.4c0,4.1,3.4,7.5,7.5,7.5h83.4c4.1,0,7.5-3.4,7.5-7.5v-140.3l130-202.2h46.2c14.2,0,24.9-10.7,24.9-25v-16.3     C465.005,576.063,453.805,565.363,440.105,565.363z M250.105,826.263L250.105,826.263c-0.8,1.2-1.2,2.6-1.2,4.1v135h-68.4v-135     c0-1.4-0.4-2.8-1.2-4.1l-158.1-245.9h386.9L250.105,826.263z M450.005,605.363c0,5.9-4.1,10-9.9,10h-36.6l22.5-35h14.1     c5.5,0,9.9,3.9,9.9,8.8V605.363z" fill="#006DF0"/>
                        <path d="M96.005,626.363c-2.3-3.5-6.9-4.5-10.4-2.3c-3.5,2.3-4.5,6.9-2.3,10.4l115.8,181.9v97.8c0,4.1,3.4,7.5,7.5,7.5v0     c4.2,0,7.5-3.4,7.6-7.5v-100c0-1.4-0.4-2.8-1.2-4L96.005,626.363z" fill="#006DF0"/>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <Popover
                open={this.state.open}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={this.handleRequestClose}
              >
                <Menu>
                  <MenuItem primaryText="Refresh" />
                  <MenuItem primaryText="Help &amp; feedback" />
                  <MenuItem primaryText="Settings" />
                  <MenuItem primaryText="Sign out" />
                </Menu>
              </Popover>
            </div>
          </div>
          <div className="project__wrapper">
            {projectDivs} 
          </div>
          <div className="project__btn"><button onClick={() => fetchProjects()}>Fetch Project</button></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  projects: state.projectReducer.projects,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us'),
  fetchProjects
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)