import { useState, ReactNode, MouseEvent } from "react";
//⭐️<>タグ要素でなければならない
// import { ReactElement } from "react";

interface ChildCompProps {
  message: string;
  children: ReactNode;
}

function ChildComp({ message, children }: ChildCompProps) {
  const [count, setCoount] = useState<number>(0);
  function updateCount(event: MouseEvent) {
    setCoount(event.clientY);
  }
  return (
    <div>
      <h2>Child</h2>
      <p>{message}</p>
      <div>{children}</div>
      <p>counst: {count}</p>
      <button onClick={() => setCoount(count + 1)}>+1</button>
      <button onClick={(event) => updateCount(event)}>+1</button>
    </div>
  );
}

export default ChildComp;
