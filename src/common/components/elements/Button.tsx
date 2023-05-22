import { Component } from "@appTypes/.";
import cx from "clsx";
import { PropsWithoutRef } from "react";

interface Props extends PropsWithoutRef<JSX.IntrinsicElements["button"]> {}

const Button: Component<Props> = ({
  disabled,
  className,
  children,
  ...restProps
}) => {
  return (
    <button
      className={cx(
        "text-white bg-black rounded-2xl p-4",
        disabled && "bg-disabled-500",
        className
      )}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
