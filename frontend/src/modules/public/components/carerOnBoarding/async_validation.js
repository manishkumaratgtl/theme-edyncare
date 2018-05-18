const asyncValidate = (values) => {
    if (values.Email) {
        return fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'carer/validate-email/' + values.Email, {
            method: "GET",
        }).then(response => {
            if (response.status !== 404) {
                throw { Email: "Email is taken." }
            }
        });
    }
    if (values.PostCode) {
        return fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'carer/validate-postcode/' + values.PostCode, {
            method: "GET",
        }).then(response => {
            if (response.status !== 404) {
                throw { PostCode: "not valid." }
            }
        });
    }
}

export default asyncValidate