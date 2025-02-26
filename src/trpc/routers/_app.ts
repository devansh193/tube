import { createTRPCRouter } from "../init";
import { usersRouter } from "@/modules/users/server/procedures";
import { searchRouter } from "@/modules/search/server/procedure";
import { videosRouter } from "@/modules/videos/server/procedure";
import { studioRouter } from "@/modules/studio/server/procedures";
import { playlistRouter } from "@/modules/playlist/server/procedure";
import { commentsRouter } from "@/modules/comments/server/procedures";
import { categoriesRouter } from "@/modules/categories/server/procedures";
import { videoViewsRouter } from "@/modules/video-views/server/procedures";
import { suggestionRouter } from "@/modules/suggestions/server/procedures";
import { subscriptionsRouter } from "@/modules/subscriptions/server/procedures";
import { videoReactionRouter } from "@/modules/video-reactions/server/procedure";
import { commentReactionRouter } from "@/modules/comment-reactions/server/procedure";

export const appRouter = createTRPCRouter({
  users: usersRouter,
  videos: videosRouter,
  search: searchRouter,
  studio: studioRouter,
  comments: commentsRouter,
  playlist: playlistRouter,
  videoViews: videoViewsRouter,
  categories: categoriesRouter,
  suggestions: suggestionRouter,
  subscriptions: subscriptionsRouter,
  videoReactions: videoReactionRouter,
  commentReactions: commentReactionRouter,
});

export type AppRouter = typeof appRouter;
