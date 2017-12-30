import { FETCH_PROJECTS } from '../Actions/projectActions';

const initialState = {
    projects:[]
}

export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PROJECTS:
        return {
          ...state,
          projects: action.data
        }
        default:
            return state
    }
}