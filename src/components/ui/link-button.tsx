import Link, { LinkProps } from "next/link";
import type { ComponentProps } from "react";

type LinkButtonProps =
  | ({ external: true } & ComponentProps<"a">)
  | ({ external?: false } & LinkProps);

export const LinkButton = (props: LinkButtonProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { external, children, ...rest } = props as any;

  if (external) {
    return (
      <a
        className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md bg-linear-to-b from-blue-500 to-blue-600 px-5 py-2.5 text-center text-base font-medium text-white shadow-xs transition-all duration-100 ease-in-out hover:opacity-90 sm:w-fit dark:text-white"
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md bg-linear-to-b from-blue-500 to-blue-600 px-5 py-2.5 text-center text-base font-medium text-white shadow-xs transition-all duration-100 ease-in-out hover:opacity-90 sm:w-fit dark:text-white"
      {...rest}
    >
      {children}
    </Link>
  );
};
