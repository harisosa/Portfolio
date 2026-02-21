import React from "react";

type ContainerProps = React.PropsWithChildren & {
  className?: string;
};

export const Container: React.FC<ContainerProps> = ({ className = "", children }) => {
  return (
    <div
      className={`
        w-full
        px-4
        sm:px-6 
        md:px-8
        lg:px-12
        xl:px-30
        ${className}
      `}
    >
      {children}
    </div>
  );
};
