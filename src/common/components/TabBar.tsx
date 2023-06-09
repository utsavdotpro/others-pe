import { Component } from "@appTypes/.";
import Text from "@elements/Text";
import cx from "clsx";
import React from "react";

type TabItemProps = {
  Icon: Component;
  label: string;
};

type Props = {
  items: TabItemProps[];
};

const TabItem: Component<{ Icon: Component; label: string }> = ({
  Icon,
  label,
}) => {
  return (
    <div className="text-center text-white">
      <Icon className="w-5 h-5 mx-auto" />

      <Text className="text-xs text-white">{label}</Text>
    </div>
  );
};

const TabBar: Component<Props> = ({ className, items = [] }) => {
  return (
    <div className={cx("bg-black flex rounded-[20px] py-2 px-6", className)}>
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          <TabItem {...item} />

          {index < items.length - 1 && (
            <div className="mx-6 w-[1px] bg-white bg-opacity-40" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TabBar;
