import { ReactNode, useState } from "react";
import { Button } from "./ui/button";
import { ChevronsUpDownIcon, Loader2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CommandEmpty, CommandInput, CommandItem, CommandList, CommandResponsiveDialog } from "./ui/command";

interface CommandSelectProps {
  options: {
    id: string;
    value: string;
    children: ReactNode
  }[]
  onSelect: (value: string) => void
  onSearch?: (value: string) => void
  value: string
  placeholder?: string
  isSearchable?: boolean
  className?: string
  isPending?: boolean
}

export const CommandSelect = ({
  options,
  onSelect,
  onSearch,
  value,
  placeholder = "Select an option",
  className,
  isPending = false
}: CommandSelectProps) => {
  const [open, setOpen] = useState(false);
  const selectedOption = options.find((option) => option.value === value);

  const handleOpenChange = (value: boolean) => {
    onSearch?.("");
    setOpen(value);
  }

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        type="button"
        variant={"outline"}
        className={cn(
          "h-9 justify-between font-normal px-2",
          !selectedOption && "text-muted-foreground",
          className
        )}
      >
        <div>
          {selectedOption ? selectedOption.children : placeholder}
        </div>
        <ChevronsUpDownIcon />
      </Button>
      <CommandResponsiveDialog
        open={open}
        onOpenChange={handleOpenChange}
        showFilter={!onSearch}
      >
        <CommandInput placeholder="Search..." onValueChange={onSearch} />
        <CommandList>
          <CommandEmpty>
            {isPending ? (
              <div className="flex items-center justify-center">
                <Loader2Icon className="animate-spin size-5 text-center" />
              </div>
            ) : (
              <span className="text-muted-foreground text-sm">
                No options found
              </span>
            )}
          </CommandEmpty>
          {
            options.map((option) => (
              <CommandItem
                className="cursor-pointer"
                key={option.id}
                onSelect={() => {
                  onSelect(option.value);
                  setOpen(false);
                }}
              >
                {option.children}
              </CommandItem>
            ))
          }
        </CommandList>
      </CommandResponsiveDialog>
    </>
  )
}