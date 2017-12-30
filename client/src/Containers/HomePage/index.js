import React,{Component} from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Dragula from 'react-dragula';
import './index.css';
import {fetchProjects} from '../../Actions/projectActions'
import Project from '../../Components/project';

class Home extends Component{
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