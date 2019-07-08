/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios';

export const LOAD_SMURFS_START = "LOAD_SMURFS_START";
export const LOAD_SMURFS_SUCCESS = "LOAD_SMURFS_SUCCESS";
export const LOAD_SMURFS_FAILURE = "LOAD_SMURFS_FAILURE";

export const loadSmurfs = () => dispatch => {
  dispatch({ type: LOAD_SMURFS_START });
  axios.get('http://localhost:3333/smurfs/')
  .then(res => {
    dispatch({ type: LOAD_SMURFS_SUCCESS, payload: res.data})
  })
  .catch(err => {
    console.log('ERROR IN THE LOAD SMURFS', err);
    dispatch({ type: LOAD_SMURFS_FAILURE})
  });
};

export const ADD_SMURFS_START = "ADD_SMURFS_START";
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS";
export const ADD_SMURFS_FAILURE = "ADD_SMURFS_FAILURE";

export const addSmurf = (newSmurf) => dispatch => {
  dispatch({ type: ADD_SMURFS_START});
  axios
  .post(`http://localhost:3333/smurfs/`, newSmurf)
  .then(res => {
    dispatch({ type: ADD_SMURFS_SUCCESS, payload: res.data})
  })
  .catch(err => {
    console.log('ERROR IN ADD FRIEND', err);
    dispatch({ type: ADD_SMURFS_FAILURE})
  })
}

export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  axios
  .delete(`http://localhost:3333/smurfs/${id}`)
  .then(res => {
    dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data });
  })
  .catch(err => {
    console.log('Issue deleting ', err);
    dispatch({ type: DELETE_SMURF_FAILURE })
  })
};

export const UPDATE_SMURF_START = "UPDATE_SMURF_START";
export const UPDATE_SMURF_SUCCESS = "UPDATE_SMURF_SUCCESS";
export const UPDATE_SMURF_FAILURE = "UPDATE_SMURF_FAILURE";

export const updateSmurf = (smurf, id) => dispatch => {
  dispatch({ type: UPDATE_SMURF_START });
  axios
  .put(`http://localhost:3333/smurfs/${id}`, smurf)
  .then(res => {
    console.log(res);
    dispatch({ type: UPDATE_SMURF_SUCCESS, payload: res.data });
  })
  .catch(err => {
    console.log('error in updating: ', err);
    dispatch({ type: UPDATE_SMURF_FAILURE })
  })
}



