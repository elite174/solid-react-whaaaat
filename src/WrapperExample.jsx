import React, { useMemo, useState } from "react";

import { CounterFactory } from "./SolidCounterFactory";
import { SolidToReact } from "./Wrapper";

export const WrapperExample = () => {
  const [count, setCount] = useState(1);
  const [isCounterVisible, setIsCounterVisible] = useState(true);

  const solidProps = useMemo(() => ({ count }), [count]);

  return (
    <div>
      <span>React counter: {count}</span>
      <button onClick={() => setCount((c) => c + 1)}>increase</button>
      <button onClick={() => setIsCounterVisible((v) => !v)}>
        Toggle solid counter visibility
      </button>
      {isCounterVisible ? (
        <SolidToReact
          SolidComponentFactory={CounterFactory}
          memoizedProps={solidProps}
        />
      ) : null}
      <SolidToReact
        SolidComponentFactory={CounterFactory}
        memoizedProps={solidProps}
      />
    </div>
  );
};
