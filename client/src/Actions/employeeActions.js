export const FETCH_PROJECTS = 'FETCH_PROJECTS';

export const fetchProjects = () => {
    return dispatch => {
        fetch('http://localhost:3000/api/projects', {'method':'GET'})
        .then((resp) => resp.json())
        .then(data => {
            dispatch({
                type: FETCH_PROJECTS,
                data
            })
        })
    }
}