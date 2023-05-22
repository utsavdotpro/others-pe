export interface Component<T = {}>
  extends React.FC<
    {
      className?: string;
      children?: React.ReactNode;
    } & T
  > {}
