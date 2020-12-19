import {SET_LOADING, SET_SHUTTLE_DATA, UPDATE_FILTERS} from "./action-types";


let initialState = {six:true,
    seven:false,
    eight:false,
    nine:false,
    ten:false,
    eleven:false,
    twelve:false,
    thirteen:false,
    fourteen:false,
    fifteen:false,
    sixteen:false,
    loading: false,
    seventeen:false,
    eighteen:false,
    nineteen:false,
    twenty:false,
    suslaunch:false,
    suslaunchfail:false,
    susland:false,
    suslandfail:false,
  shuttleData: []}


let reducer = (state = initialState, action) => {
    switch (action.type) {
    case UPDATE_FILTERS:
        return {
            ...state,
            ...action.payload
        }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case SET_SHUTTLE_DATA: 
    return {
      ...state,
      shuttleData: action.payload
    }
      default:
        return {
          ...state
        };
    }
  };
  

  export default reducer;