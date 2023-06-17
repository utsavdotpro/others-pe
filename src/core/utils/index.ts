import { UPI } from "@appTypes/.";
import { generateUPILink } from "@utils/upi";

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

export const generateShareText = (upi: UPI) =>
  `Hey, can you please clear this payment of *₹${upi.am}* for me?\n
${generateUPILink(upi)}\n
Click the link and pay using any UPI app.\n
- OthersPe`;

export const isDevEnvironment = (): boolean => {
  return process.env.NODE_ENV === "development";
};
