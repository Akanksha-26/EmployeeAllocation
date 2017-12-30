import React,{Component} from 'react'
import Employee from './employee'
export default class Project extends Component{
    render = () => {
        let { project } = this.props;
        let dummyEmployee = {
            name:'No allocation',
            role:'N/A',
            id:-1,
            projectId:project.id
        }
        let employees = project.employees.map((employee,index) => {
            return <Employee key={employee.id} employee={employee} currentProjectName = {project.name}/>
        })

        if(project.employees.length < 4){
            for(let i=0; i < 4 - project.employees.length;i++ ){
                employees.push(<Employee key={i} employee={dummyEmployee} currentProjectName = 'N/A' />);
            }
        }

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