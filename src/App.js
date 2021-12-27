import "./App.css";
import { useEffect } from "react";
import { render } from "solid-js/web";

import {
  SolidComponent,
  solidComponentProps,
  solidComponentState,
} from "./SolidComponent";

function App() {
  // Mount component/widget
  useEffect(() => {
    const el = document.getElementById("solid");

    return render(SolidComponent, el);
  }, []);

  const onClick = () => solidComponentState.setCount((c) => c + 1);

  const onSolidClick = (str) => console.log(str);

  solidComponentProps.onClick = onSolidClick;

  return (
    <div className="App">
      <p>
        update solid component: <button onClick={onClick}>click</button>
      </p>
      <div id="solid"></div>
    </div>
  );
}

export default App;
