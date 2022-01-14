import { createEffect, createSignal, on, onCleanup } from "solid-js";
import html from "solid-js/html";

export const CounterFactory = () => {
  const [externalProps, setExternalProps] = createSignal({});

  const Counter = () => {
    // Component's state
    const [count, setCount] = createSignal(externalProps().count ?? 0);

    // We need to have an effect which will be update state if props are changed
    createEffect(
      on(
        externalProps,
        (reactProps) => {
          setCount(reactProps.count);
        },
        { defer: true }
      )
    );

    // Just debug info
    onCleanup(() => console.log("Dispose"));

    return html`<div>
      <button onClick=${() => setCount((c) => c - 1)}>-</button>
      <span>${count}</span>
      <button onClick=${() => setCount((c) => c + 1)}>+</button>
    </div>`;
  };

  return [Counter, setExternalProps];
};
