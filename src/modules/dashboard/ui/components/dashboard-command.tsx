"use client";

import { GeneratedAvatar } from "@/components/generated-avatar";
import {
  CommandResponsiveDialog,
  CommandInput,
  CommandItem,
  CommandList,
  CommandGroup,
  CommandEmpty,
} from "@/components/ui/command";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

interface DashboardCommandProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DashboardCommand = ({ open, setOpen }: DashboardCommandProps) => {
  const router = useRouter();
  const trpc = useTRPC();
  const [search, setSearch] = useState("");

  const { data: meetings, isPending: meetingsIsPending } = useQuery(
    trpc.meetings.getMany.queryOptions({
      search,
      pageSize: 100,
    })
  );

  const { data: agents, isPending: agentsIsPending } = useQuery(
    trpc.agents.getMany.queryOptions({
      search,
      pageSize: 100,
    })
  );

  return (
    <CommandResponsiveDialog
      open={open}
      onOpenChange={setOpen}
      showFilter={false}
    >
      <CommandInput
        placeholder="Find a meeting or agent..."
        value={search}
        onValueChange={(value) => setSearch(value)}
      />
      <CommandList>
        <CommandGroup heading="Meetings">
          <CommandEmpty>
            {meetingsIsPending ? (
              <div className="flex items-center justify-center">
                <Loader2Icon className="animate-spin size-5 text-center" />
              </div>
            ) : (
              <span className="text-muted-foreground text-sm">
                No meetings found
              </span>
            )}
          </CommandEmpty>
          {meetings?.items.map((meeting) => (
            <CommandItem
              onSelect={() => {
                router.push(`/meetings/${meeting.id}`);
                setOpen(false);
              }}
              key={meeting.id}
              className="cursor-pointer"
            >
              {meeting.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Agents">
          <CommandEmpty>
            {agentsIsPending ? (
              <div className="flex items-center justify-center">
                <Loader2Icon className="animate-spin size-5 text-center" />
              </div>
            ) : (
              <span className="text-muted-foreground text-sm">
                No agents found
              </span>
            )}
          </CommandEmpty>
          {agents?.items.map((agent) => (
            <CommandItem
              onSelect={() => {
                router.push(`/agents/${agent.id}`);
                setOpen(false);
              }}
              key={agent.id}
              className="cursor-pointer"
            >
              <GeneratedAvatar
                seed={agent.name}
                variant="botttsNeutral"
                className="size-5"
              />
              {agent.name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandResponsiveDialog>
  );
};
