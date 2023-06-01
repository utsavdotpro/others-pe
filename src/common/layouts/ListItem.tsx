import { Component } from "@appTypes/.";
import cx from "clsx";

type Props = {
  Icon?: Component;
  RightContent?: JSX.Element;
};

const ListItem: Component<Props> = ({
  Icon,
  children,
  RightContent,
  className,
}) => {
  return (
    <div
      className={cx("flex items-center p-4 rounded-2xl", className)}
      style={{
        boxShadow: "0px 0px 2px 1px rgba(0, 0, 0, 0.05)",
      }}
    >
      {Icon && <Icon className="w-6 h-6 p-1 rounded-md bg-primary-500" />}

      <div className="flex-1 mx-2.5">{children}</div>

      {RightContent}
    </div>
  );
};

export default ListItem;
