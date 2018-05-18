import { combineReducers } from 'redux';
import sampleCarerOnBoarding from './Carers/sampleCarerOnBoarding'
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
    selectedCarer: sampleCarerOnBoarding,
    carersList: sampleCarersList,
    selectCarer: reducerSelectCarer,
})

export default allReducers