import { createRouter } from './context';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';

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
	})
	.query('get-group-by-id', {
		input: z.object({ id: z.string() }),
		async resolve({ ctx, input }) {
			const { id } = input;
			const group = await ctx.prisma.group.findUnique({
				where: { id },
			});
			if (!group) {
				throw new TRPCError({
					code: 'NOT_FOUND',
				});
			}

			return group;
		},
	});
