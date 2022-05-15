import clsx from "clsx";
import React from "react";

export interface InputProps extends React.ComponentPropsWithRef<"input"> {}

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    return (
      <div className="flex flex-col">
        <label htmlFor={rest.id} className="sr-only">
          {children}
        </label>

        <input
          ref={ref}
          className={clsx(
            "bg-transparent w-full font-bold text-2xl py-2 px-3 focus:outline-none",
            className
          )}
          {...rest}
        />
      </div>
    );
  }
);
