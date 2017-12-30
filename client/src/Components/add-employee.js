import React,{Component} from 'react';

export default class AddEmployee extends Component{
    constructor(){
        super();
        this.state = {
            "projectId":"",
            "name":"",
            "team":"",
            "role":""
        }
    }

    componentWillReceiveProps = (props) => {
        this.setState({projectId: props.projects[0].id})
    }

    handleProjectChange = (event) => {
        this.setState({projectId: event.target.value})
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    handleTeamChange = (event) => {
        this.setState({team: event.target.value});
    }

    handleRoleChange = (event) => {
        this.setState({role: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.postEmployee(this.state);
        this.props.changePage();
    }

    render = () => {
        const { projects } = this.props;
        const { name, team, role, selectedProject } = this.state;

        var options = projects.map(function(project) {
            return (
                <option key={project.id} value={project.id}>
                    {project.name}
                </option>
            )
        });
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Name:
                    <input type="text" value={name} onChange={this.handleNameChange}/>
                    <br/>
                    Role: 
                    <input type="text" value={role} onChange={this.handleRoleChange}/>
                    <br/>
                    Team: 
                    <input type="text" value={team} onChange={this.handleTeamChange}/>
                    <br/>
                    Project: 
                    <select value={selectedProject} onChange={this.handleProjectChange}>
                        {options}
                    </select>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form> 
            </div>
        );
    }
}