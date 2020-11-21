import {UPDATE_FILTERS} from "./action-types";

export const updateFilters = (payload) => 
{
    return {
        type: UPDATE_FILTERS,
        payload
    }
}