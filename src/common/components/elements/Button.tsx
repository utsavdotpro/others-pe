import { Component } from "@appTypes/.";
import cx from "clsx";
import { PropsWithoutRef } from "react";

interface Props extends PropsWithoutRef<JSX.IntrinsicElements["button"]> {}

const Button: Component<Props> = ({ className, children }) => {
  return (
    <button className={cx("text-white bg-black rounded-2xl p-4", className)}>
      {children}
    </button>
  );
};

export default Button;
