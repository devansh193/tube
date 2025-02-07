import { HydrateClient, trpc } from "@/trpc/server";
import { PageClient } from "./client";
import { Suspense } from "react";

export default async function Home() {
  void trpc.hello.prefetch({ text: "Devansh" });

  return (
    <HydrateClient>
      <Suspense fallback={<p>Loading....</p>}>
        <PageClient />
      </Suspense>
    </HydrateClient>
  );
}
