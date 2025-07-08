"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  return (
      <div className="p-4 flex flex-col gap-y-4">
        <Button onClick={() => authClient.signOut()}>Sign out</Button>
      </div>
    );
}
