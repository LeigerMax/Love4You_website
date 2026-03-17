import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "lg";
  variant?: "default" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { size = "default", variant = "default", className, children, ...props },
    ref
  ) => {
    const sizeClasses =
      size === "lg"
        ? "px-8 py-4 text-lg"
        : "px-6 py-3 text-base";
    const variantClasses =
      variant === "outline"
        ? "border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100"
        : "bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white shadow-[0_0_24px_rgba(244,63,94,0.45)] hover:brightness-110";
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          sizeClasses,
          variantClasses,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
