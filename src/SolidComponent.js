import { createRoot, createSignal } from "solid-js";
import html from "solid-js/html";

export const SolidComponent = () => {
  const { count, setCount } = solidComponentState;

  return html`<div class="solid-component">
    <h1>Solid component</h1>
    <div class="block">
      <div>
        React counter: ${solidComponentDataProps.dataProp}<br />
        Solid counter: ${count}
      </div>
      <button onClick=${solidComponentCallbackProps.onClickHandler}>
        update react component
      </button>
      <button onClick=${() => setCount((c) => c + 1)}>
        update solid counter
      </button>
    </div>
  </div>`;
};

export const solidComponentState = createRoot(() => {
  const [count, setCount] = createSignal(0);

  return {
    count,
    setCount,
  };
});

export const solidComponentDataProps = createRoot(() => {
  const [dataProp, setDataProp] = createSignal(undefined);

  return { dataProp, setDataProp };
});

export const solidComponentCallbackProps = {
  onClickHandler: undefined,
};
