import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "../../../utils";
import { ButtonSize, ButtonVariant, type ButtonProps } from "./types";

export const buttonVariants = cva("transition-colors leading-none inline", {
  variants: {
    variant: {
      [ButtonVariant.Default]: "text-textColor",
      [ButtonVariant.Primary]:
        "px-5 py-3 text-base font-medium text-center text-textColor rounded-lg bg-primaryColor hover:outline",
      [ButtonVariant.Secondary]:
        "px-5 py-3 text-base font-medium text-center text-textColor border border-textColor rounded-lg focus:ring-4 focus:ring-textSecondaryColor",
      [ButtonVariant.Badge]:
        "rounded-full font-base px-3 py-1 text-textSecondaryColor ring-1 ring-textSecondaryColor hover:ring-primaryColor",
      [ButtonVariant.Ghost]:
        "bg-white shadow radius-md hover:bg-gray-20 font-medium text-center rounded-md w-full px-4 py-2 text-base hover:bg-gray-100 transition-colors duration-200",
      [ButtonVariant.GhostDark]:
        "bg-black text-white shadow radius-md hover:bg-gray-20 font-medium text-center rounded-md w-full px-4 py-2 text-base hover:bg-gray-700 transition-colors duration-200",
    },
    size: {
      [ButtonSize.Base]: "px-4 py-2",
      [ButtonSize.Small]: "text-sm p-1",
      [ButtonSize.Large]: "text-lg py-3 px-8",
    },
  },
  defaultVariants: {
    variant: ButtonVariant.Default,
    size: ButtonSize.Base,
  },
});

export function Button({
  className,
  variant,
  size,
  asChild,
  children,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
        }),
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
