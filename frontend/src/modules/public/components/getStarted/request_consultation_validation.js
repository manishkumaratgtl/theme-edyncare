const requestConsultationValidation = values => {
    const errors = {}
    if (!values.Name) {
        errors.Name = 'Required'
    }
    if (!values.Email) {
        errors.Email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
        errors.Email = 'Invalid email address'
    }

    if (!values.CarerFor) {
        errors.CarerFor = 'Required'
    }

    if (!values.Phone) {
        errors.Phone = 'Required'
    } else if (!/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/i.test(values.Phone)) {
        errors.Phone = 'Invalid Telephone number'
    }
    return errors
}

export default requestConsultationValidation