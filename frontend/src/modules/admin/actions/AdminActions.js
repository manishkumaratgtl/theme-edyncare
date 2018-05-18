import {
    actionCreator,
    AdminActionTypes,
    CHECK_AGENCYEXIST,
    checkHttpStatus,
    GET_AGENCYDATABYID,
    GET_AGENCYLIST,
    GET_MASTERDATABYNAME,
    jsonApiHeader,
    POST_AGENCYDATA,
    showSuccessMessage,
    createSearchUrlForCustomAPI,
    AgencyActionTypes,
    GET_CLIENTS
  } from '../constants/ApiConstants';
  
  export const getClientList = (searchObj) => {
    return (dispatch, getState) => {
      dispatch(actionCreator(AgencyActionTypes.get_Clients.REQUEST));
      let query_params = createSearchUrlForCustomAPI(searchObj);
      fetch(`${GET_CLIENTS}${query_params}`, {
        method: 'get',
        headers: jsonApiHeader(getState().login.access_token, 'application/json'),
      })
        .then(checkHttpStatus)
        .then(function(response) {
          dispatch(actionCreator(AgencyActionTypes.get_Clients.SUCCESS, response));
        })
        .catch(function(error) {
          console.log(error);
        });
    };
  };

  // ------------------------------------------

//CarerList
export function selectCarer (carer) {
    return {
        type: "CARER_SELECTED",
        payload: carer
    }
}


//Onboarding
export function decideCarerRound (carer, round, decision) {
    return {
        type: "CAREROB_DECISION",
        payload: {
            carer,
            round,
            decision
        }
    }
}