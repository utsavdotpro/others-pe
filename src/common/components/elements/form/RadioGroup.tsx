import React, { useState } from "react";
import { Component } from "@appTypes/.";

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
      {items.map(({ value, label }) => (
        <div className="flex items-center" key={value}>
          <input
            type="radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            defaultChecked={selectedValue === value}
            id={value}
            {...{ value, name }}
          />
          <label
            htmlFor={value}
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
