import React,{Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AddEmployee from '../../Components/add-employee'

import {fetchAllProjects, postEmployee} from '../../Actions/employeeActions'

class About extends Component{
  componentWillMount = () => {
    this.props.fetchAllProjects()
  }

  render = () => {
    const { projects, postEmployee } = this.props;
    return(
      <div>
        <h1>About Us</h1>
        <p>Hello Medium!</p>
        <AddEmployee projects={projects} postEmployee={postEmployee}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  projects: state.employeeReducer.projects,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllProjects,
  postEmployee
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)