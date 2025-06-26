"use client"

import { Fragment, type ReactNode } from "react"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "react-resizable-panels"
import { cn } from "@/lib/utils"

const ResizablePanelGroupComponent = ResizablePanelGroup
const ResizablePanelComponent = ResizablePanel
const ResizableHandleComponent = ResizableHandle

/**
 * A thin wrapper around `react-resizable-panels` that behaves like the
 * original ShadCN example, but **does not** rely on the unpublished
 * `@radix-ui/react-resizable` package.
 *
 * Usage:
 * <Resizable direction="horizontal">
 *   <Sidebar />
 *   <Content />
 * </Resizable>
 */
interface ResizableProps {
  /** Split direction — default `"horizontal"` */
  direction?: "horizontal" | "vertical"
  /** Two or more children wrapped in resizable panels */
  children: ReactNode[]
  className?: string
}

export function Resizable({ direction = "horizontal", children, className }: ResizableProps) {
  const isHorizontal = direction === "horizontal"

  return (
    <ResizablePanelGroupComponent
      direction={direction}
      className={cn("w-full h-full", isHorizontal ? "flex-row" : "flex-col", className)}
    >
      {children.map((child, idx) => (
        <Fragment key={idx}>
          <ResizablePanelComponent className="min-w-[10px] min-h-[10px]">{child}</ResizablePanelComponent>
          {idx < children.length - 1 && (
            <ResizableHandleComponent
              className={cn(
                "bg-muted transition-colors hover:bg-muted-foreground/40",
                isHorizontal ? "w-1 cursor-col-resize" : "h-1 cursor-row-resize",
              )}
            />
          )}
        </Fragment>
      ))}
    </ResizablePanelGroupComponent>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
