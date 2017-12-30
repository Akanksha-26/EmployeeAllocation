import { FETCH_ALL_PROJECTS } from '../Actions/employeeActions';

const initialState = {
    projects:[]
}

export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ALL_PROJECTS:
        return {
          ...state,
          projects: action.data
        }
        default:
            return state
    }
}