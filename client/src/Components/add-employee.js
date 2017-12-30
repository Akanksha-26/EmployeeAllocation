import React,{Component} from 'react';

export default class AddEmployee extends Component{
    render = () => {
        return(
            <div>
                <form>
                    First name:<input type="text" name="firstname"/>
                    <br/>
                    Last name: <input type="text" name="lastname"/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form> 
            </div>
        );
    }
}