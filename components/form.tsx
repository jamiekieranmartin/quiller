import clsx from "clsx";
import React from "react";

export interface FormProps extends React.ComponentPropsWithRef<"form"> {}

// eslint-disable-next-line react/display-name
export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    return (
      <form
        ref={ref}
        className={clsx("flex flex-col h-full gap-4", className)}
        {...rest}
      >
        {children}
      </form>
    );
  }
);
