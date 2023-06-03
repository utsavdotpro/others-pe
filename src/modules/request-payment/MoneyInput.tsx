import { Component } from "@appTypes/.";
import Text from "@elements/Text";
import cx from "clsx";
import { useState } from "react";

const MoneyInput: Component = ({ className }) => {
  const [value, setValue] = useState("0");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") return setValue("0");

    setValue(parseInt(e.target.value).toString());
  };

  return (
    <div className={cx("flex items-center justify-center text-6xl", className)}>
      <Text>₹</Text>

      <input
        className="inline h-16 max-w-full text-6xl bg-transparent outline-none text-start"
        style={{ width: `${value.length}ch` }}
        type="number"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default MoneyInput;
