import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { MAX_FREE_AGENTS, MAX_FREE_MEETINGS } from "@/modules/premium/server/constants";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { RocketIcon } from "lucide-react";
import Link from "next/link";

export const DashboardTrial = () => {
  const trpc = useTRPC()
  const { data, isPending } = useQuery(trpc.premium.getFreeUsage.queryOptions())

  if (isPending) {
    return (
      <Skeleton className="h-[180px] w-full rounded-lg bg-sidebar-primary flex flex-col justify-between p-3">
        <div className="flex flex-col gap-y-4">
          <Skeleton className="h-[10px] w-full rounded-lg bg-sidebar-accent" />
          <Skeleton className="h-[10px] w-full rounded-lg bg-sidebar-accent" />
          <Skeleton className="h-[10px] w-[80%] rounded-lg bg-sidebar-accent" />
          <Skeleton className="h-[10px] w-[50%] rounded-lg bg-sidebar-accent" />
        </div>
        <Skeleton className="h-[10px] w-full rounded-lg bg-sidebar-accent" />
      </Skeleton>
    )
  }

  if (!data) {
    return null;
  }

  return (
    <div className="border border-border/10 rounded-lg w-full bg-white/5 flex flex-col gap-y-2">
      <div className="p-3 flex flex-col gap-y-4">
        <div className="flex items-center gap-2">
          <RocketIcon className="size-4" />
          <p className="text-sm font-medium">Free Trial</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-xs">
            {data.agentCount}/{MAX_FREE_AGENTS} Agents
          </p>
          <Progress value={(data.agentCount / MAX_FREE_AGENTS) * 100} />
        </div> 
        <div className="flex flex-col gap-y-2">
          <p className="text-xs">
            {data.meetingCount}/{MAX_FREE_MEETINGS} Meetings
          </p>
          <Progress value={(data.meetingCount / MAX_FREE_MEETINGS) * 100} />
        </div> 
      </div>
      <Button 
        asChild
        className="bg-transparent border-t border-border/10 hover:bg-white/10 rounded-t-none"
      >
        <Link href="/upgrade">
          Upgrade
        </Link>
      </Button>
    </div>
  )
};