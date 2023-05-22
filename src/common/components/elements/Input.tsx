import { Component } from "@appTypes/.";
import cx from "clsx";
import { PropsWithoutRef } from "react";
import Text from "@elements/Text";

interface Props extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  inputClassName?: string;
  error?: boolean;
  errorText?: string;
}

const Input: Component<Props> = ({
  error,
  errorText,
  className,
  inputClassName,
  ...restProps
}) => {
  return (
    <div className="relative">
      <div
        className={cx(
          "py-3.5 px-5 rounded-xl flex items-center border-2 border-primary-500 placeholder:text-disabled-500",
          error && "border-error-500",
          className
        )}
      >
        <input
          className={cx("w-full bg-transparent outline-none", inputClassName)}
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
