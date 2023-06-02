import { Component } from "@appTypes/.";
import cx from "clsx";
import { PropsWithoutRef } from "react";

interface Props extends PropsWithoutRef<JSX.IntrinsicElements["span"]> {
  block?: boolean;
  bold?: boolean;
};

const Text: Component<Props> = ({
  bold,
  block,
  className,
  children,
  onClick,
  ...restProps
}) => {
  return (
    <span
      className={cx(
        "text-black",
        {
          "font-bold": bold,
          block,
        },
        onClick && "cursor-pointer select-none",
        className
      )}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </span>
  );
};

export default Text;
