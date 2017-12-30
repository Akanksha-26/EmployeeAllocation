import React,{Component} from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Dragula from 'react-dragula';
import './index.css';
import {fetchProjects} from '../../Actions/projectActions'

class Home extends Component{

  render = () => {
    let { fetchProjects, projects } = this.props;

    let projectDivs = projects.length > 0 ? projects.map(project => {
      return <div key={project.id}>{project.name}</div>
    }) : <div>Empty</div>

    return (
    <div>
      {projectDivs}
        <div className="App">
          <h3 className="App-intro">
            Employee Project Allocation
          </h3>
          <div className="project">
            <div className="project__employee">
              <div className="project__employee__1"></div>
              <div className="project__employee__2"></div>
            </div>
            <div className="project__table">

            </div>
            <div className="project__employee">
              <div className="project__employee__3"></div>
              <div className="project__employee__4"></div>
            </div>
          </div>
        </div>
        <button onClick={() => fetchProjects()}>Go to about page via redux</button>
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