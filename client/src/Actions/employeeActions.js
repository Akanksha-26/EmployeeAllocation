export const FETCH_ALL_PROJECTS = 'FETCH_ALL_PROJECTS';
export const POST_EMPLOYEE = 'POST_EMPLOYEE';

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

        fetch(url, {'method':'post', body: JSON.stringify(employeeData)})
        .then((resp) => resp.json())
        .then(responseData => {
            console.log(responseData)
            dispatch({
                type: POST_EMPLOYEE,
                data: responseData
            })
        })
    }
}