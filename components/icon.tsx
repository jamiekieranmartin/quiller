import clsx from "clsx";
import React from "react";

export interface IconProps extends React.ComponentPropsWithRef<"button"> {}

// eslint-disable-next-line react/display-name
export const Icon = React.forwardRef<HTMLButtonElement, IconProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    return (
      <button
        ref={ref}
        className={clsx(
          "group rounded-full p-2 hover:bg-stone-600 transition-all duration-300 ease-in-out",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
