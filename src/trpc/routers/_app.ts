import { categoriesRouter } from "@/modules/categories/server/procedures";
import { createTRPCRouter } from "../init";
import { studioRouter } from "@/modules/studio/server/procedures";
import { videosRouter } from "@/modules/videos/server/procedure";

export const appRouter = createTRPCRouter({
  studio: studioRouter,
  videos: videosRouter,
  categories: categoriesRouter,
});
export type AppRouter = typeof appRouter;
