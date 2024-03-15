import { queryType } from "nexus";
import { TContext } from "^/utils/serverTypes";
import { MeResponseData } from ".";
import { AllPostsResponseData } from ".";

export const UserQueries = queryType({
  definition(t) {
    // ME QUERY
    t.field("Me", {
      type: MeResponseData,
      async resolve(_, __, ctx: TContext) {
        if (!ctx.req.session.userId) {
          return {
            msg: "No Session found",
          };
        }

        const user = await ctx.db.user.findUnique({
          where: { id: ctx.req.session.userId },
        });

        return {
          id: user?.id,
          name: user?.name,
          email: user?.email,
          msg: "Success",
        };
      },
    }),
      // ALL POSTS
      t.field("AllPosts", {
        type: AllPostsResponseData,
        async resolve(_, __, ctx: TContext) {
          const allPosts = await ctx.db.post.findMany({
            orderBy: {
              createdAt: "desc",
            },
            include: {
              author: {
                select: {
                  name: true,
                },
              },
            },
          });

          return {
            msg: "Success",
            data: allPosts,
          };
        },
      });
  },
});
