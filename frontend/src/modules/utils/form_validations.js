const validate = (values) => {
  const errors = {};
  if (!values.currentPassword) {
    errors.currentPassword = 'Please enter current password';
  }
  if (!values.newPassword) {
    errors.newPassword = 'Please enter new password';
  }
  if (!values.confirmNewPassword) {
    errors.confirmNewPassword = 'Please confirm new password';
  } else if (values.confirmNewPassword !== values.newPassword) {
    errors.confirmNewPassword = 'Password mismatched';
  }
  return errors;
};
export default validate;
