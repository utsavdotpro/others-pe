import { Component } from "@appTypes/.";
import Button from "@elements/Button";
import Text from "@elements/Text";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import cx from "clsx";

const mockUPIList = [
  { upiId: "sannan@ybl" },
  { upiId: "priya@ybl" },
  { upiId: "raj@ybl" },
];

const RequestSheet: Component = ({ className }) => {
  return (
    <div
      className={cx(
        "bg-white w-full py-4 pb-8 px-5 rounded-t-[20px]",
        className
      )}
    >
      <Text className="text-xl font-semibold">Request</Text>

      <div className="flex items-center justify-between mt-3 mb-5">
        <Text>
          From <strong>{mockUPIList[0].upiId}</strong>
        </Text>

        <ChevronDownIcon className="bg-[#ECEBF0] rounded-full w-5 h-5 p-1" />
      </div>

      <Button className="w-full">Request Payment</Button>
    </div>
  );
};

export default RequestSheet;
