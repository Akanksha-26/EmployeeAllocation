import React from 'react'

const Employee = ({employee, currentProjectName}) => {
    return (
        <div className="project__employee">
            <div className="project__employee__title"></div>
            <span className="popover above">
                <h3 className="popover__name"> {employee.name} </h3>
                <h5 className="popover__name">{employee.role}</h5>
                <h6 className="popover__title">Team</h6>
                <h4></h4>
                <h6 className="popover__title">Current Project</h6>
                <h4>{currentProjectName}</h4>
            </span>
        </div>
    )
}

export default Employee