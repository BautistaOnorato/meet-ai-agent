"use client";

import { DataTable } from "@/components/data-table";
import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { columns } from "../components/columns";
import { EmptyState } from "@/components/empty-state";
import { useRouter } from "next/navigation";
import { useMeetingsFilters } from "../../hooks/use-meetings-filters";
import { DataPagination } from "@/components/data-pagination";
import Link from "next/link";
import { MeetingsListHeader } from "../components/meetings-list-header";

export const MeetingsView = () => {
  const router = useRouter();
  const [filters, setFilters] = useMeetingsFilters();
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.meetings.getMany.queryOptions({ ...filters })
  );

  return (
    <>
      <MeetingsListHeader hasMeetings={data.items.length > 0} />
      <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
        {data.items.length > 0 ? (
          <>
            <DataTable
              data={data.items}
              columns={columns}
              onRowClick={(row) => router.push(`/meetings/${row.id}`)}
            />
            <DataPagination
              page={filters.page}
              totalPages={data.totalPages}
              onPageChange={(page) => setFilters({ page })}
            />
          </>
        ) : (
          <EmptyState
            title="Create your first meeting"
            description="Schedule a meeting to connect with others. Each meeting lets you collaborate, share ideas, and interact with participants in real time."
          >
            <p className="text-sm text-muted-foreground">
              First time using MeetAI? Follow our quick guide to{" "}
              <Link
                href="/get-started"
                className="underline text-primary font-semibold"
              >
                get started!
              </Link>
            </p>
          </EmptyState>
        )}
      </div>
    </>
  );
};

export const MeetingsViewLoading = () => {
  return (
    <LoadingState
      title="Loading meetings"
      description="This might take a few seconds..."
    />
  );
};

export const MeetingsViewError = () => {
  return (
    <ErrorState
      title="Error loading meetings"
      description="Please try again later"
    />
  );
};
