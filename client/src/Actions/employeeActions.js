export const FETCH_ALL_PROJECTS = 'FETCH_ALL_PROJECTS';
export const POST_EMPLOYEE = 'POST_EMPLOYEE';
export const PATCH_EMPLOYEE = 'PATCH_EMPLOYEE';

export const fetchAllProjects = () => {
    return dispatch => {
        var filter = {
            fields:["id","name"]
        }
        var url = 'http://localhost:3000/api/projects?filter=' + JSON.stringify(filter);

        fetch(url, {'method':'GET'})
        .then((resp) => resp.json())
        .then(data => {
            dispatch({
                type: FETCH_ALL_PROJECTS,
                data
            })
        })
    }
}

export const postEmployee = (employeeData) => {
    return dispatch => {
        var url = 'http://localhost:3000/api/employees';

        var postString = JSON.stringify(employeeData);

        // Create an empty Headers instance
        var headers = new Headers();

        // Add a few headers
        headers.set('Content-Type', 'application/json');

        fetch(url, {
            'method':'post', 
            'body': postString,
            'headers': headers
        })
        .then((resp) => resp.json())
        .then(responseData => {
            dispatch({
                type: POST_EMPLOYEE,
                data: responseData
            })
        })
    }
}

export const patchEmployee = (employeeData) => {
    return dispatch => {
        var url = 'http://localhost:3000/api/employees';

        var postString = JSON.stringify(employeeData);

        // Create an empty Headers instance
        var headers = new Headers();

        // Add a few headers
        headers.set('Content-Type', 'application/json');

        fetch(url, {
            'method':'patch', 
            'body': postString,
            'headers': headers
        })
        .then((resp) => resp.json())
        .then(responseData => {
            dispatch({
                type: PATCH_EMPLOYEE,
                data: responseData
            })
        })
    }
}