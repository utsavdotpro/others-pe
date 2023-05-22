import { Component } from "@appTypes/.";
import cx from "clsx";

type Props = {
  bold?: boolean;
};

const Text: Component<Props> = ({ bold, className, children }) => {
  return (
    <span className={cx("text-black", bold && "font-bold", className)}>
      {children}
    </span>
  );
};

export default Text;
