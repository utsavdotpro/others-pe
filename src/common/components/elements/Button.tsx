import { Component } from "@appTypes/.";
import cx from "clsx";
import { PropsWithoutRef } from "react";

interface Props extends PropsWithoutRef<JSX.IntrinsicElements["button"]> {
  Icon?: Component;
  iconClassName?: string;
}

type Variant = {
  Primary: Component<Props>;
};

const Button: Component<Props> & Variant = ({
  disabled,
  className,
  children,
  Icon,
  iconClassName,
  ...restProps
}) => {
  return (
    <button
      className={cx(
        "text-white bg-black rounded-[20px] p-4 font-medium flex items-center justify-center",
        disabled && "bg-disabled-500",
        className
      )}
      disabled={disabled}
      {...restProps}
    >
      {Icon && <Icon className={cx("me-2.5 w-6 h-6", iconClassName)} />}

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
