import { useEffect, useRef, useMemo } from "react";
import { render } from "solid-js/web";

export const SolidToReact = ({ SolidComponentFactory, memoizedProps }) => {
  const containerRef = useRef(null);

  const [Component, setProps] = useMemo(
    () => SolidComponentFactory(),
    [SolidComponentFactory]
  );

  useEffect(() => {
    setProps(memoizedProps);
  }, [memoizedProps, setProps]);

  useEffect(() => {
    if (containerRef.current === null) throw new Error("Container is null");

    return render(Component, containerRef.current);
  }, [Component]);

  return <div ref={containerRef} style={{ display: "contents" }}></div>;
};
