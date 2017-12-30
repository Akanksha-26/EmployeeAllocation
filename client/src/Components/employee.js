import React from 'react'

const Employee = ({employee}) => {
    return (
        <div className="project__employee">
            <div className="project__employee__title"></div>
            <span className="popover above">Hey bro, I am {employee.name}!</span>
        </div>
    )
}

export default Employee