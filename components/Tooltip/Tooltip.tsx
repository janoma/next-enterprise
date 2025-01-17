"use client";

import * as RadixTooltip from "@radix-ui/react-tooltip";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const tooltipContent = cva([], {
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
  variants: {
    intent: {
      primary: ["rounded-0.5md", "bg-zinc-700", "font-open-sans", "text-white"],
    },
    size: {
      md: ["px-4", "py-2.5", "text-2xs"],
    },
  },
});

const tooltipArrow = cva([], {
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
  variants: {
    intent: {
      primary: ["fill-zinc-700"],
    },
    size: {
      md: ["w-4", "h-2"],
    },
  },
});

export interface TooltipProps
  extends RadixTooltip.TooltipProps,
    VariantProps<typeof tooltipContent> {
  children: React.ReactElement;
  className?: string;
  explainer: React.ReactElement | string;
  side?: "bottom" | "left" | "right" | "top";
  withArrow?: boolean;
}

export function Tooltip({
  children,
  className,
  defaultOpen,
  explainer,
  intent,
  onOpenChange,
  open,
  side = "top",
  size,
  withArrow,
}: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root
        defaultOpen={defaultOpen}
        delayDuration={200}
        onOpenChange={onOpenChange}
        open={open}
      >
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className={twMerge(tooltipContent({ className, intent, size }))}
            side={side}
            sideOffset={5}
          >
            {explainer}
            {withArrow ? (
              <RadixTooltip.Arrow
                className={twMerge(tooltipArrow({ className, intent, size }))}
              />
            ) : null}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
