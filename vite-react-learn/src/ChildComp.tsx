import { ReactNode } from "react";
//⭐️<>タグ要素でなければならない
// import { ReactElement } from "react";

interface ChildCompProps {
  message: string;
  children: ReactNode;
}

function ChildComp({ message, children }: ChildCompProps) {
  return (
    <div>
      <h2>Child</h2>
      <p>{message}</p>
      <div>{children}</div>
    </div>
  );
}

export default ChildComp;
