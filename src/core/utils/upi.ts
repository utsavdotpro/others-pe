import { UPI } from "@appTypes/.";

export const validateUPIId = (upiId: string) => {
  const upiIdRegex = /^[a-zA-Z0-9.\-_]{2,49}@[a-zA-Z._]{2,49}$/;

  console.log(upiIdRegex.test(upiId));

  return upiIdRegex.test(upiId);
};

export const generateUPILink = (upi: UPI) => {
  return `upi://pay?pa=${upi.pa}&pn=${encodeURI(upi.pn || "")}&am=${
    upi.am
  }&tn=${encodeURI(upi.tn || "")}`;
};
