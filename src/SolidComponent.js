import { createRoot, createSignal } from "solid-js";
import html from "solid-js/html";

export const SolidComponent = () => {
  const { count } = solidComponentState;

  const handleClick = () => {
    console.log('Click from SOLID Component');
  
    solidComponentProps.onClick?.('OMG REALLY?');
  }

  return html`<div onClick=${handleClick}>${count}</div>`;
};

export const solidComponentState = createRoot(() => {
  const [count, setCount] = createSignal(0);

  return {
    count,
    setCount,
  };
});

export const solidComponentProps = {
  onClick: undefined
}
