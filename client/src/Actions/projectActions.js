export const FETCH_PROJECTS = 'FETCH_PROJECTS';

export const fetchProjects = () => {
    return dispatch => {
        var filter = {
            include:["employees"]
        }
        var url = 'http://localhost:3000/api/projects?filter=' + JSON.stringify(filter);

        fetch(url, {'method':'GET'})
        .then((resp) => resp.json())
        .then(data => {
            dispatch({
                type: FETCH_PROJECTS,
                data
            })
        })
    }
}