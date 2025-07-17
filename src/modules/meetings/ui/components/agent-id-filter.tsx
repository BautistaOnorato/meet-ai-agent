"use client";

import { CommandSelect } from "@/components/command-select";
import { GeneratedAvatar } from "@/components/generated-avatar";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useMeetingsFilters } from "../../hooks/use-meetings-filters";

export const AgentIdFilter = () => {
  const [filters, setFilters] = useMeetingsFilters();
  const trpc = useTRPC();

  const [agentSearch, setAgentSearch] = useState("");
  const { data, isPending } = useQuery(
    trpc.agents.getMany.queryOptions({ pageSize: 100, search: agentSearch })
  );

  const handleAgentSearch = (value: string) => {
    setAgentSearch(value);
  }

  return (
    <CommandSelect
      isPending={isPending}
      className="h-9"
      placeholder="Agent"
      options={(data?.items ?? []).map((agent) => ({
        id: agent.id,
        value: agent.id,
        children: (
          <div className="flex items-center gap-x-2">
            <GeneratedAvatar 
              variant="botttsNeutral"
              seed={agent.name}
              className="size-4"
            />
            <span>{agent.name}</span>
          </div>
        )
      }))}
      onSelect={(value) => setFilters({ agentId: value })}
      onSearch={handleAgentSearch}
      value={filters.agentId ?? ""}
    />
  );
};
