const carerOnBoardingValidation = values => {
  const errors = {
    name: {},
    DBS: {},
    address: {}
  };
  const name = values.name || {};
  const DBS = values.DBS || {};
  const address = values.address || {};

  if (!name.firstName) {
    errors.name.firstName = 'Required'
  }
  if (!name.surname) {
    errors.name.surname = 'Required'
  }
  if (!name.houseNumber) {
    errors.name.houseNumber = 'Required'
  }
  if (!values.Email) {
    errors.Email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
    errors.Email = 'Invalid email address'
  }
  if (!values.phoneContact) {
    errors.phoneContact = 'Required'
  } else if (!/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/i.test(values.phoneContact)) {
    errors.phoneContact = 'Invalid Telephone number'
  }
  if (!values.gender) {
    errors.gender = 'Required'
  }
  if (!values.dateOfBirth) {
    errors.dateOfBirth = 'Required'
  }
  if (!address.houseNumber) {
    errors.address.houseNumber = 'Required'
  }
  if (!address.street) {
    errors.address.street = 'Required'
  }
  if (!address.town) {
    errors.address.town = 'Required'
  }
  if (!address.postCode) {
    errors.address.postCode = 'Required'
  }
  if (!values.AreasOfInterest) {
    errors.AreasOfInterest = 'Required'
  }
  if (!values.nationality) {
    errors.nationality = 'Required'
  }

  if (!values.postCode) {
    errors.postCode = 'Required'
  } else if (!/[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}/g.test(values.postCode)) {
    errors.postCode = 'Invalid post code'
  }
  if (!values.YearsOfExp) {
    errors.YearsOfExp = 'Required'
  }

  if (!values.CareQualification) {
    errors.CareQualification = 'Required'
  }

  if (!values.DesiredWorkload) {
    errors.DesiredWorkload = 'Required'
  }

  if (!values.TypeOfWork) {
    errors.TypeOfWork = 'Required'
  }

  if (!values.CareExperiance) {
    errors.CareExperiance = 'Required'
  }

  if (!values.CareServices) {
    errors.CareServices = 'Required'
  }

  if (!values.SpokenEnglish) {
    errors.SpokenEnglish = 'Required'
  }

  if (!values.RightToWork) {
    errors.RightToWork = 'Required'
  }

  if (!DBS.Status) {
    errors.DBS.Status = 'Required'
  }

  if (!values.HasSmartPhone) {
    errors.HasSmartPhone = 'Required'
  }

  if (!values.DrivingCapacity) {
    errors.DrivingCapacity = 'Required'
  }
  if (!values.NoticePeriod) {
    errors.NoticePeriod = 'Required'
  }
  if (!values.HasSmartPhone) {
    errors.HasSmartPhone = 'Required'
  }

  if (!values.AquisitionChannel) {
    errors.AquisitionChannel = 'Required'
  }

  if (!values.Tasks) {
    errors.Tasks = 'Required'
  }
  return errors
}

export default carerOnBoardingValidation