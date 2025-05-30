import React, { ComponentProps } from "react";

export const Section = ({
  id,
  children,
  ...rest
}: ComponentProps<"section">) => {
  return (
    <section id={id} {...rest}>
      <div className="py-4 px-4 md:p-[3.25rem]">
        <div className="max-w-7xl mx-auto w-full">{children}</div>
      </div>
    </section>
  );
};
