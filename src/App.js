import "./App.css";
import { useEffect, useState } from "react";
import { render } from "solid-js/web";

import {
  SolidComponent,
  solidComponentProps,
  solidComponentState,
} from "./SolidComponent";
import { WrapperExample } from "./WrapperExample";

function App() {
  const [reactCounter, setReactCounter] = useState(0);

  // Mount component/widget
  useEffect(() => {
    const el = document.getElementById("solid");

    return render(SolidComponent, el);
  }, []);

  const updateReactCounter = () => setReactCounter((c) => c + 1);

  solidComponentProps.setOnClickHandler((_prevFunc) => updateReactCounter);
  solidComponentProps.setDataProp(reactCounter);

  return (
    <div className="App">
      <div className="react-component">
        <h1>React component</h1>
        <div className="block">
          <div>
            react counter: <span>{reactCounter}</span>
          </div>

          <button onClick={updateReactCounter}>update react counter</button>
          <button onClick={() => solidComponentState.setCount((c) => c + 1)}>
            update solid counter
          </button>
        </div>
      </div>
      <div id="solid"></div>

      <WrapperExample />
    </div>
  );
}

export default App;
