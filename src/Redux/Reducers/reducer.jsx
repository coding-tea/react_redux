import { DECREMENT, INCREMENT } from "../actions/actions";

export const counterReducer = (state = { value : 0 }, action) => {
    switch(action.type){
        case INCREMENT :
            return {...state, value : state.value + 1 };
        case DECREMENT:
            return {...state, value : state.value - 1};
        default:
            return state;

    }
}