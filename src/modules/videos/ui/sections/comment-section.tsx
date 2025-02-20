"use client";

import { CommentForm } from "@/modules/comments/ui/components/comment-form";
import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface CommentSectionProps {
  videoId: string;
}

export const CommentSection = ({ videoId }: CommentSectionProps) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ErrorBoundary fallback={<p>Error...</p>}>
        <CommentSectionSuspense videoId={videoId} />
      </ErrorBoundary>
    </Suspense>
  );
};

export const CommentSectionSuspense = ({ videoId }: CommentSectionProps) => {
  const [comments] = trpc.comments.getMany.useSuspenseQuery({ videoId });
  return (
    <div className="mt-6">
      <div className="flex flex-col gap-6">
        <h1>0 Comments</h1>
        <h1>{JSON.stringify(comments)}</h1>
        <CommentForm videoId={videoId} />
      </div>
    </div>
  );
};
