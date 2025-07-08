"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { usePlatform } from "@/hooks/use-platform";
import { PanelLeftCloseIcon, PanelLeftIcon, SearchIcon } from "lucide-react";
import { DashboardCommand } from "./dashboard-command";
import { useEffect, useState } from "react";

export const DashboardNavbar = () => {
  const [commandOpen, setCommandOpen] = useState(false);
  const { state, toggleSidebar, isMobile } = useSidebar();
  const platform = usePlatform();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setCommandOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <DashboardCommand open={commandOpen} setOpen={() => setCommandOpen((open) => !open)} />
      <nav className="flex px-4 gap-x-2 items-center bg-background py-3 border-b">
        <Button className="size-9" variant={"outline"} onClick={toggleSidebar}>
          {state === "collapsed" || isMobile ? (
            <PanelLeftIcon />
          ) : (
            <PanelLeftCloseIcon />
          )}
        </Button>
        <Button
          variant={"outline"}
          size={"sm"}
          onClick={() => setCommandOpen((open) => !open)}
          className="h-9 w-[240px] justify-start font-normal text-muted-foreground hover:text-muted-foreground"
        >
          <SearchIcon />
          Search
          {!isMobile && <kbd
            className={`ml-auto pointer-events-none inline-flex h-5 select-none items-center 
            gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground`}
          >
            <span className="text-xs">{platform === "mac" ? "⌘" : "Ctrl +"}</span>K
          </kbd>}
        </Button>
      </nav>
    </>
  );
};
