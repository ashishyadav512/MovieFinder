"use client"

import * as React from "react"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroupRoot = React.forwardRef<
  React.ElementRef<typeof ResizablePanelGroup>,
  React.ComponentPropsWithoutRef<typeof ResizablePanelGroup>
>(({ className, ...props }, ref) => (
  <ResizablePanelGroup
    ref={ref}
    className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
))
ResizablePanelGroupRoot.displayName = ResizablePanelGroup.displayName

const ResizablePanelRoot = React.forwardRef<
  React.ElementRef<typeof ResizablePanel>,
  React.ComponentPropsWithoutRef<typeof ResizablePanel>
>(({ className, ...props }, ref) => <ResizablePanel ref={ref} className={cn(className)} {...props} />)
ResizablePanelRoot.displayName = ResizablePanel.displayName

const ResizableHandleRoot = React.forwardRef<
  React.ElementRef<typeof ResizableHandle>,
  React.ComponentPropsWithoutRef<typeof ResizableHandle>
>(({ className, withHandle, ...props }, ref) => (
  <ResizableHandle
    ref={ref}
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:h-full after:w-[100px] after:bg-background after:content-[''] data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:h-[100px] data-[panel-group-direction=vertical]:after:w-full",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-4 items-center justify-center rounded-sm border bg-background">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-2.5 w-2.5"
        >
          <path d={props.direction === "vertical" ? "M12 5v14" : "M5 12h14"} />
        </svg>
      </div>
    )}
  </ResizableHandle>
))
ResizableHandleRoot.displayName = ResizableHandle.displayName

export {
  ResizablePanelGroupRoot as ResizablePanelGroup,
  ResizablePanelRoot as ResizablePanel,
  ResizableHandleRoot as ResizableHandle,
}
