import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Dragula from 'react-dragula';
import './index.css';

const Home = props => (
  <div>
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
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Home)