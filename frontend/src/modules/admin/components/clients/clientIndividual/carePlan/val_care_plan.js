const valCarePlan = values => {
  const errors = {
    duration: {},
  };
  const duration = values.duration || {};

  if (!duration.startDate) {
    errors.duration.startDate = 'Required'
  }
  if (!duration.length) {
    errors.duration.length = 'Required'
  }
  return errors
}

export default valCarePlan