import { createRouter } from './context';
import { z } from 'zod';

export const itemsRouter = createRouter().mutation('create-item', {
	input: z.object({ title: z.string(), id: z.string() }),
	async resolve({ ctx, input }) {
		const { title, id } = input;
		await ctx.prisma.item.create({
			data: { title: title, groupId: id },
		});

		return { success: true };
	},
});
