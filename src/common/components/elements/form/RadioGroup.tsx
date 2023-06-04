import React, { useState } from "react";
import { Component } from "@appTypes/.";
import clsx from "clsx";

type Props = {
  defaultValue?: string;
  name: string;
  items: { value: string; label: string }[];
  onChange?: (value: string) => void;
};

const RadioGroup: Component<Props> = ({
  defaultValue,
  name,
  items = [],
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    // @ts-ignore: onChange type error
    <div onChange={handleChange}>
      {items.map(({ value, label }, index) => {
        const isSelected = selectedValue === value;
        return (
          <React.Fragment key={value}>
            <div className="flex items-center">
              <input
                type="radio"
                // className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                defaultChecked={isSelected}
                id={value}
                {...{ value, name }}
              />
              <label
                htmlFor={value}
                className={clsx(
                  "text-sm ms-5",
                  isSelected ? "text-black" : "text-[#606060]"
                )}
              >
                {label}
              </label>
            </div>

            {index < items.length - 1 && (
              <div className="my-3.5 border-[#E9E9E9] border-t" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default RadioGroup;
