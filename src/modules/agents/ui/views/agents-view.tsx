"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { DataTable } from "@/components/data-table";
import { columns } from "../components/columns";
import { EmptyState } from "@/components/empty-state";
import { useAgentsFilters } from "../../hooks/use-agents-filters";
import { DataPagination } from "@/components/data-pagination";
import { useRouter } from "next/navigation";
import { AgentsListHeader } from "../components/agents-list-header";
import Link from "next/link";

export const AgentsView = () => {
  const router = useRouter();
  const [filters, setFilters] = useAgentsFilters();

  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.agents.getMany.queryOptions({
      ...filters,
    })
  );

  return (
    <>
      <AgentsListHeader hasAgents={data.items.length > 0} />
      <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
        {data.items.length > 0 ? (
          <>
            <DataTable
              data={data.items}
              columns={columns}
              onRowClick={(row) => router.push(`/agents/${row.id}`)}
            />
            <DataPagination
              page={filters.page}
              totalPages={data.totalPages}
              onPageChange={(page) => setFilters({ page })}
            />
          </>
        ) : (
          <EmptyState
            title="Create your first agent"
            description="Create an agent to join your meetings. Each agent will follow your instructions and can interact with participants during the call."
          >
            <p className="text-sm text-muted-foreground">
              First time using Thinki? Follow our quick guide to{" "}
              <Link href="/get-started" className="underline text-primary font-semibold">
                get started!
              </Link>
            </p>
          </EmptyState>
        )}
      </div>
    </>
  );
};

export const AgentsViewLoading = () => {
  return (
    <LoadingState
      title="Loading agents"
      description="This might take a few seconds..."
    />
  );
};

export const AgentsViewError = () => {
  return (
    <ErrorState
      title="Error loading agents"
      description="Please try again later"
    />
  );
};


