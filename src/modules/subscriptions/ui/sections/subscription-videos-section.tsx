"use client";
import Link from "next/link";
import { toast } from "sonner";
import { Suspense } from "react";
import { trpc } from "@/trpc/client";
import { DEFAULT_LIMIT } from "@/constants";
import { ErrorBoundary } from "react-error-boundary";
import { InfiniteScroll } from "@/components/infinite-scroll";
import {
  SubscriptionItem,
  SubscriptionItemSkeleton,
} from "../components/subscription-item";

const SubscriptionsVideoSectionSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <SubscriptionItemSkeleton key={index} />
      ))}
    </div>
  );
};

export const SubscriptionsVideoSection = () => {
  return (
    <Suspense fallback={<SubscriptionsVideoSectionSkeleton />}>
      <ErrorBoundary fallback={<p>Error...</p>}>
        <SubscriptionsVideoSectionSuspense />
      </ErrorBoundary>
    </Suspense>
  );
};

const SubscriptionsVideoSectionSuspense = () => {
  const utils = trpc.useUtils();
  const [data, query] = trpc.subscriptions.getMany.useSuspenseInfiniteQuery(
    {
      limit: DEFAULT_LIMIT,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  const unsubscribe = trpc.subscriptions.remove.useMutation({
    onSuccess: (data) => {
      toast.success("Unsubscribed");
      utils.subscriptions.getMany.invalidate();
      utils.videos.getManySubscribed.invalidate();
      utils.users.getOne.invalidate({ id: data.creatorId });
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  return (
    <div>
      <div className="flex flex-col gap-4">
        {data.pages
          .flatMap((page) => page.items)
          .map((item) => (
            <Link href={`/users/${item.user.id}`} key={item.creatorId}>
              <SubscriptionItem
                name={item.user.name}
                imageUrl={item.user.imageUrl}
                subscriberCount={item.user.subscriberCount}
                onUnsubscribe={() =>
                  unsubscribe.mutate({ userId: item.creatorId })
                }
                disabled={unsubscribe.isPending}
              />
            </Link>
          ))}
      </div>
      <InfiniteScroll
        hasNextPage={query.hasNextPage}
        isFetchingNextPage={query.isFetchingNextPage}
        fetchNextPage={query.fetchNextPage}
      />
    </div>
  );
};
