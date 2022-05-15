import clsx from "clsx";
import React from "react";

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {}

// eslint-disable-next-line react/display-name
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    return (
      <button
        ref={ref}
        className={clsx(
          "self-end rounded shadow font-bold text-lg bg-stone-600 text-white py-2 px-4 transition-all duration-300 ease-in-out hover:bg-stone-300 hover:text-stone-600",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
