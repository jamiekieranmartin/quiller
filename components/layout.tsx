import clsx from "clsx";
import React from "react";
import { Icon } from "./icon";

export type LayoutProps = {
  className?: string;
};

export const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  children,
  className,
}) => (
  <section className={clsx("flex flex-col h-screen", className)}>
    {children}
  </section>
);
