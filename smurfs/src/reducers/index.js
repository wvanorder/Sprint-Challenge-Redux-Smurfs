/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {
  LOAD_SMURFS_START,
  LOAD_SMURFS_SUCCESS,
  LOAD_SMURFS_FAILURE,
  ADD_SMURFS_START,
  ADD_SMURFS_SUCCESS,
  ADD_SMURFS_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE,
  UPDATE_SMURF_START,
  UPDATE_SMURF_SUCCESS,
  UPDATE_SMURF_FAILURE,
} from '../actions';

const initialState = {
    smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: '',
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case LOAD_SMURFS_START:
    return{
      ...state,
      error: '',
      fetchingSmurfs: true,
    };
    case LOAD_SMURFS_SUCCESS:
    return{
      ...state,
      smurfs: action.payload,
      error: '',
      fetchingSmurfs: false,
    };
    case LOAD_SMURFS_FAILURE:
    return{
      ...state
    };
    case ADD_SMURFS_START:
    return{
      ...state,
      addingSmurf: true,
      error: '',
    };
    case ADD_SMURFS_SUCCESS:
    return{
      ...state,
      smurfs: action.payload,
      error: '',
      addingSmurf: false,
    };
    case DELETE_SMURF_START:
    return{
      ...state,
      fetchingSmurfs: true,
      error: '',
    };
    case DELETE_SMURF_SUCCESS:
    return{
      ...state,
      fetchingSmurfs: false,
      smurfs: action.payload
    };
    case UPDATE_SMURF_START:
    return{
      ...state,
      fetchingSmurfs: true,
    };
    case UPDATE_SMURF_SUCCESS:
    return{
      ...state,
      smurfs: action.payload,
      error: '',
      fetchingSmurfs: false,
    };
    default:
    return state;
  }
};

export default reducer;





