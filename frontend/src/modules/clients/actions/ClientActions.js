//CarerList
export function selectCarer(carer) {
    return {
        type: "CARER_SELECTED",
        payload: carer
    }
}

//Onboarding
export function decideCarerRound(carer, round, decision) {
    return {
        type: "CAREROB_DECISION",
        payload: {
            carer,
            round,
            decision
        }
    }
}