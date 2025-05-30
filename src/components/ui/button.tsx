import clsx from "clsx"
import { ComponentProps } from "react"

export const Button = ({  className, children, ...rest}: ComponentProps<'button'>) => {
  return (
    <button
      className={clsx(
        "inline-flex w-full items-center justify-center whitespace-nowrap rounded-md bg-linear-to-b from-blue-500 to-blue-600 px-5 py-2.5 text-center text-base font-medium text-white shadow-xs transition-all duration-100 ease-in-out hover:opacity-90 sm:w-fit dark:text-white",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
