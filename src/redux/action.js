import {UPDATE_FILTERS , SET_LOADING , SET_SHUTTLE_DATA} from "./action-types";


export const updateFilters = (payload) => 
{
    return {
        type: UPDATE_FILTERS,
        payload
    }
}

export const setLoading = (payload) => 
{
    return{
        type: SET_LOADING,
        payload
    }
}

export const setShuttleData = (payload) => 
{

    return {
        type: SET_SHUTTLE_DATA,
        payload
    }

}