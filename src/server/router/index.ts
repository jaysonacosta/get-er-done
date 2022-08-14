// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { groupsRouter } from './groups';
import { itemsRouter } from './items';

export const appRouter = createRouter()
	.transformer(superjson)
	.merge(groupsRouter)
	.merge(itemsRouter);

// export type definition of API
export type AppRouter = typeof groupsRouter;
