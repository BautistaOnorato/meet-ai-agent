"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const HomeView = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  if (!session) {
    return <p>Loading...</p>;
  }

  const signOut = () => {
    authClient.signOut({
      fetchOptions: { onSuccess: () => router.push("/sign-in") },
    });
  };

  return (
    <div className="flex flex-col gap-y-4 p-4">
      <p>Hello {session.user.name}</p>
      <Button onClick={signOut}>Sign out</Button>
    </div>
  );
};
