import { createRouter } from './context';
import { z } from 'zod';

export const appRouter = createRouter().mutation('createGroup', {
	input: z.object({ title: z.string() }),
	async resolve({ ctx, input }) {
		const { title } = input;
		const createGroup = await ctx.prisma.group.create({
			data: { title },
		});

		return { success: true, group: createGroup };
	},
});
