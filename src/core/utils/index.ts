import { UPI } from "@appTypes/index";

export const validateUPIId = (upiId: string) => {
  const upiIdRegex = /^[a-zA-Z0-9.\-_]{2,49}@[a-zA-Z._]{2,49}$/;

  console.log(upiIdRegex.test(upiId));

  return upiIdRegex.test(upiId);
};

export const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout;

  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const formatAmount = (amount: number) => {
  return amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};

export const generateUPILink = (upi: UPI) => {
  return `upi://pay?pa=${upi.pa}&pn=${upi.pn}&am=${upi.am}&tn=${upi.tn}`;
};

export const generateShareText = (upi: UPI) =>
  `Hey, can you please clear this payment of *₹${upi.am}* for me?\n
${generateUPILink(upi)}\n
Click the link and pay using any UPI app.\n
- OthersPe`;