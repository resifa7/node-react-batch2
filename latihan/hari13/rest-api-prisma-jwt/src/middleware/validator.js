export const isRequired = (value, message) => {
  if (!value) {
    throw { code: 400, message: `The field ${message} is required.` };
  }
};
