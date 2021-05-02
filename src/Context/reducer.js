import { ADD_EVENT, REMOVE_EVENT } from "./action.types";

export default (state, action)=>{
    switch (action.type) {
        case ADD_EVENT:
            return[...state, action.payload];
        case REMOVE_EVENT:
            return state.filter(task => task.id !== action.payload);
        default:
            return state;
    }
};