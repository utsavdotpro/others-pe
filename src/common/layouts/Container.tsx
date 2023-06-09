import { Component } from "@appTypes/.";
import cx from "clsx";

type Props = {
  widthFullScreen?: boolean;
};

const Container: Component<Props> = ({
  className,
  children,
  widthFullScreen,
}) => {
  return (
    <div
      className={cx(
        "w-full px-5",
        widthFullScreen && "max-w-auto lg:max-w-sm",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
