import { Component } from "@appTypes/.";
import clsx from "clsx";
import React, { useState } from "react";

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
                className="cursor-pointer"
                defaultChecked={isSelected}
                id={value}
                {...{ value, name }}
              />
              <label
                htmlFor={value}
                className={clsx(
                  "text-sm ms-5 cursor-pointer",
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
