export const validateUPIId = (upiId: string) => {
  const upiIdRegex = /[a-zA-Z0-9.\-_]{2,49}@[a-zA-Z._]{2,49}/;

  console.log(upiIdRegex.test(upiId));

  return upiIdRegex.test(upiId);
};
