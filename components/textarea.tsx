import clsx from "clsx";
import React from "react";

export interface TextAreaProps
  extends React.ComponentPropsWithRef<"textarea"> {}

// eslint-disable-next-line react/display-name
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    return (
      <div className="flex flex-col flex-grow">
        <label htmlFor={rest.id} className="sr-only">
          {children}
        </label>

        <textarea
          ref={ref}
          className={clsx(
            "bg-transparent w-full text-lg py-2 px-3 focus:outline-none",
            className
          )}
          {...rest}
        />
      </div>
    );
  }
);
