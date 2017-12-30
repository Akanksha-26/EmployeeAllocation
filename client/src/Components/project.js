import React,{Component} from 'react'
import Employee from './employee'
export default class Project extends Component{
    render = () => {
        let { project } = this.props;
        let employees = project.employees.map(employee => {
            return <Employee key={employee.id} employee={employee}/>
        })
        return(
            <div className="project">
                <div className="project__employee-grid">
                    {employees}
                </div>
                <div className="project__table">
                </div>
            </div>
        )
    }
}