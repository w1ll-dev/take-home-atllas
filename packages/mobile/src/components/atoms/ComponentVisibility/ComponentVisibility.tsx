import { ReactNode } from "react";

type ComponentVisibilityProps = {
  isVisible: boolean;
  children: ReactNode;
};

const ComponentVisibility = ({
  children,
  isVisible,
}: ComponentVisibilityProps) => {
  if (!isVisible) return null;

  return <>{children}</>;
};

export { ComponentVisibility };
