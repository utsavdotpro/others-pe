import { Component } from "@appTypes/.";
import Text from "@elements/Text";

type Props = {
  title: string;
  subtitle?: string;
};

const Header: Component<Props> = ({ title, subtitle }) => {
  return (
    <div className="mb-5 bg-primary-500 pt-safe">
      <div className="h-[172px] flex flex-col items-center justify-center">
        <Text className="text-2xl font-semibold">{title}</Text>
        {subtitle && <Text className="text-[#606060] text-xs">{subtitle}</Text>}
      </div>
    </div>
  );
};

export default Header;
