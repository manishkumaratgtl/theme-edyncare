const ClientMailingListValidation = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Required'
    }
    if (!values.contactEmail) {
        errors.contactEmail = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.contactEmail)) {
        errors.contactEmail = 'Invalid email address'
    }
    if (!values.careIsFor) {
        errors.careIsFor = 'Required'
    }
    return errors
}

export default ClientMailingListValidation