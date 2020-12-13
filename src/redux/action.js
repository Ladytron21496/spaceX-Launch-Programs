import {UPDATE_FILTERS} from "./action-types";
import {SET_LOADING} from "./action-types";

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