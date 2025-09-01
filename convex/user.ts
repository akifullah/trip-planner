import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        imageUrl: v.string(),
        subscription: v.string(),

    },
    handler: async (ctx, args) => {
        const user = await ctx.db.query("UserTable")
            .filter((q) => q.eq(q.field("email"), args.email)).collect();

        if (!user.length) {
            const userData = {
                name: args.name,
                email: args.email,
                imageUrl: args.imageUrl,
                subscription: args.subscription
            }

            const result = await ctx.db.insert("UserTable", userData);
            return userData;

        }
        return user[0];
    }

}); 