import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../init";
export const appRouter = createTRPCRouter({
  hello: protectedProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      console.log({ dBUSer: opts.ctx.clerkUserId });
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});
export type AppRouter = typeof appRouter;
