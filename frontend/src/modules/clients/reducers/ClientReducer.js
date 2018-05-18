import { combineReducers } from 'redux';
import sampleCarersList from './Carers/sampleCarersList'

function reducerSelectCarer (state= null, action) {
    switch (action.type) {
        case "CARER_SELECTED":
            return action.payload;
            break;

        case "CARER_DESELECTED":
            return null;
            break;
    }
    return state
}

const allReducers= combineReducers({
    carersList: sampleCarersList,
    selectCarer: reducerSelectCarer,
})

export default allReducers