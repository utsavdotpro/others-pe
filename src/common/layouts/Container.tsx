import { Component } from "@appTypes/.";
import cx from "clsx";

type Props = {};

const Container: Component<Props> = ({ className, children }) => {
  return <div className={cx("w-full px-5", className)}>{children}</div>;
};

export default Container;
