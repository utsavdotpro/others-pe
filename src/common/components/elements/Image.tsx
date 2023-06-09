import { Component } from "@appTypes/.";
import { PropsWithoutRef } from "react";

interface Props extends PropsWithoutRef<JSX.IntrinsicElements["img"]> {}

const Image: Component<Props> = ({ ...restProps }) => {
  return <img {...restProps} />;
};

export default Image;
