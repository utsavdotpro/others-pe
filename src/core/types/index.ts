export interface Component<T = {}>
  extends React.FC<
    {
      className?: string;
      children?: React.ReactNode;
    } & T
  > {}


export type UPI = {
  pa: string; // payment address
  pn?: string; // name
  am: number; // amount
  tn?: string; // note
};