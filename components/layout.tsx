import React, { Children } from "react";

export type LayoutProps = {};

export const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  children,
}) => (
  <section className="h-screen max-w-prose mx-auto py-16 px-2">
    {children}
  </section>
);
