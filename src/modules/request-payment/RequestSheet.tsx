import { Component } from "@appTypes/.";
import Button from "@elements/Button";
import Text from "@elements/Text";
import RadioGroup from "@elements/form/RadioGroup";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import cx from "clsx";
import { useState } from "react";

const mockUPIList = [
  { upiId: "sannan@ybl" },
  { upiId: "priya@ybl" },
  { upiId: "raj@ybl" },
];

const UPISelector: Component<{
  onChange?: (value: string) => void;
  defaultValue?: string;
}> = ({ className, onChange, defaultValue }) => {
  return (
    <div className={cx("", className)}>
      <RadioGroup
        name="selectedUPI"
        items={mockUPIList.map(({ upiId }) => ({ value: upiId, label: upiId }))}
        {...{ defaultValue, onChange }}
      />
    </div>
  );
};

const RequestSheet: Component = ({ className }) => {
  const [selectedUPI, setSelectedUPI] = useState(mockUPIList[0]);
  const [selectionMode, setSelectionMode] = useState(false);

  const handleUPIChange = (value: string) => {
    setSelectedUPI(mockUPIList.find((upi) => upi.upiId === value)!);
    setSelectionMode(false);
  };

  return (
    <div
      className={cx(
        "bg-white w-full py-4 pb-8 px-5 rounded-t-[20px]",
        className
      )}
    >
      <Text className="text-xl font-semibold">Request</Text>

      {!selectionMode ? (
        <div className="flex items-center justify-between mt-3 mb-5">
          <Text>
            From{" "}
            <strong
              className="cursor-pointer"
              onClick={() => setSelectionMode(true)}
            >
              {selectedUPI.upiId}
            </strong>
          </Text>

          <ChevronDownIcon
            className="bg-[#ECEBF0] rounded-full w-5 h-5 p-1 cursor-pointer"
            onClick={() => setSelectionMode(true)}
          />
        </div>
      ) : (
        <UPISelector
          className="mt-6 mb-5"
          onChange={handleUPIChange}
          defaultValue={selectedUPI.upiId}
        />
      )}

      <Button className="w-full">Request Payment</Button>
    </div>
  );
};

export default RequestSheet;
