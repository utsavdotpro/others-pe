import { Component } from "@appTypes/.";
import Text from "@elements/Text";
import cx from "clsx";
import { useState } from "react";

const MAX_AMOUNT = 100000;

type Props = {
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

const MoneyInput: Component<Props> = ({
  className,
  defaultValue = "0",
  onValueChange,
}) => {
  const [value, setValue] = useState<string>(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setValue("0");
      onValueChange?.("0");
      return;
    }

    // TODO: show message to user
    if (parseInt(e.target.value) > MAX_AMOUNT) return;

    setValue(parseInt(e.target.value).toString());
    onValueChange?.(e.target.value);
  };

  return (
    <div className={cx("flex items-center justify-center text-6xl", className)}>
      <Text>₹</Text>

      <input
        className="inline max-w-full text-6xl bg-transparent outline-none text-start"
        style={{ width: `${value.length + 0.5}ch` }}
        type="number"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default MoneyInput;
