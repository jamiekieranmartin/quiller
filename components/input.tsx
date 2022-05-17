import clsx from "clsx";
import React from "react";

export interface InputProps extends React.ComponentPropsWithRef<"input"> {}

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    return (
      <div className={clsx("flex flex-col", className)}>
        <label htmlFor={rest.id} className="sr-only">
          {children}
        </label>

        <input
          ref={ref}
          className="bg-transparent w-full font-bold py-2 px-3 focus:outline-none"
          {...rest}
        />
      </div>
    );
  }
);
