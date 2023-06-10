import { Component } from "@appTypes/.";
import cx from "clsx";
import { PropsWithoutRef, useState } from "react";
import Text from "@elements/Text";

interface Props extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  inputClassName?: string;
  error?: boolean;
  errorText?: string;
  dynamicWidth?: boolean;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

const Input: Component<Props> = ({
  error,
  errorText,
  className,
  inputClassName,
  dynamicWidth,
  defaultValue = "",
  onValueChange,
  ...restProps
}) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onValueChange?.(e.target.value);
  };

  return (
    <div className="relative">
      <div
        className={cx(
          "py-3.5 px-5 rounded-xl flex items-center border-2 border-primary-500 placeholder:text-disabled-500 max-w-full",
          error && "border-error-500",
          dynamicWidth && "w-fit",
          className
        )}
      >
        <input
          className={cx("w-full bg-transparent outline-none", inputClassName)}
          style={dynamicWidth ? { width: `${value?.toString().length}ch` } : {}}
          {...{ value, onChange }}
          {...restProps}
        />
      </div>

      {error && errorText && (
        <Text className="absolute bottom-0 left-0 -mb-5 text-xs text-error-500">
          {errorText}
        </Text>
      )}
    </div>
  );
};

export default Input;
