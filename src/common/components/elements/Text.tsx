import { Component } from "@appTypes/.";
import cx from "clsx";

type Props = {
  block?: boolean;
  bold?: boolean;
};

const Text: Component<Props> = ({ bold, block, className, children }) => {
  return (
    <span
      className={cx(
        "text-black",
        {
          "font-bold": bold,
          block,
        },
        className
      )}
    >
      {children}
    </span>
  );
};

export default Text;
