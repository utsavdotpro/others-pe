import { Component } from "@appTypes/.";
import cx from "clsx";
import { PropsWithoutRef } from "react";

interface Props extends PropsWithoutRef<JSX.IntrinsicElements["button"]> {}

type Variant = {
  Primary: Component<Props>;
};

const Button: Component<Props> & Variant = ({
  disabled,
  className,
  children,
  ...restProps
}) => {
  return (
    <button
      className={cx(
        "text-white bg-black rounded-2xl p-4 font-medium",
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

Button.Primary = ({ className, ...rest }) => (
  <Button
    className={cx("bg-primary-500 !text-black !rounded-full", className)}
    {...rest}
  />
);

export default Button;
