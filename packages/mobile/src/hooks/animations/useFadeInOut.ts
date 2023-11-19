import { MotiProps } from "moti";
import { useMemo } from "react";

type UseFadeInOutParams = {
  endOpacity: number;
  startOpacity?: number;
  startY?: number;
  endY?: number;
};

const useFadeInOut = ({
  startOpacity,
  endOpacity,
  startY,
  endY,
}: UseFadeInOutParams) => {
  const startOpacityToUse = startOpacity ?? 0;
  const startYToUse = startY ?? 0;
  const endOpacityToUse = endOpacity ?? 0;
  const endYToUse = endY ?? 0;

  const from = useMemo(
    () => ({
      opacity: startOpacityToUse,
      translateY: startYToUse,
    }),
    [startOpacityToUse, startYToUse],
  );

  const animate = useMemo(
    () => ({
      opacity: endOpacityToUse,
      translateY: endYToUse,
    }),
    [endOpacityToUse, endYToUse],
  );

  const transition: MotiProps["transition"] = useMemo(
    () => ({
      type: "timing",
      duration: 500,
    }),
    [],
  );

  return {
    transition,
    from,
    animate,
  };
};

export { useFadeInOut };
