import { createTRPCRouter } from "../init";
import { videosRouter } from "@/modules/videos/server/procedure";
import { studioRouter } from "@/modules/studio/server/procedures";
import { categoriesRouter } from "@/modules/categories/server/procedures";
import { videoViewsRouter } from "@/modules/video-views/server/procedures";
import { videoReactionRouter } from "@/modules/video-reactions/server/procedure";
import { subscriptionsRouter } from "@/modules/subscriptions/server/procedures";
import { commentsRouter } from "@/modules/comments/server/procedures";

export const appRouter = createTRPCRouter({
  studio: studioRouter,
  videos: videosRouter,
  categories: categoriesRouter,
  videoViews: videoViewsRouter,
  videoReactions: videoReactionRouter,
  subscriptions: subscriptionsRouter,
  comments: commentsRouter,
});

export type AppRouter = typeof appRouter;
