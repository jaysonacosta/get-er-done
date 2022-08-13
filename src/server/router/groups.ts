import { createRouter } from './context';
import { z } from 'zod';

export const groupsRouter = createRouter()
	.mutation('create-group', {
		input: z.object({ title: z.string() }),
		async resolve({ ctx, input }) {
			const { title } = input;
			await ctx.prisma.group.create({
				data: { title },
			});

			return { success: true };
		},
	})
	.query('get-all-groups', {
		async resolve({ ctx }) {
			return await ctx.prisma.group.findMany();
		},
	});
