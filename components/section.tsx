import clsx from "clsx";
import React from "react";

export type SectionProps = {
  className?: string;
};

export const Section: React.FC<React.PropsWithChildren<SectionProps>> = ({
  children,
  className,
}) => (
  <section
    className={clsx(
      "w-full grid flex-grow overflow-y-auto max-w-prose mx-auto px-2",
      className
    )}
  >
    {children}
  </section>
);
