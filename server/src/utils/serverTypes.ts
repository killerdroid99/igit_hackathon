import { PrismaClient } from "@prisma/client";
import { Response } from "express";
import { Redis } from "ioredis";

export interface TContext {
	req: Express.Request & {
		session: {
			userId: string;
		};
	};
	res: Response;
	redis: Redis;
	db: PrismaClient;
}
