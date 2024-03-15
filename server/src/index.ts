import express from "express";
import { ApolloServer } from "apollo-server-express";
import { config } from "dotenv-safe";
import { makeSchema, unionType } from "nexus";
import { join } from "path";
import cors from "cors";
import session from "express-session";
import Redis from "ioredis";
import RedisStore from "connect-redis";
import { PrismaClient } from "@prisma/client";
import { COOKIE_NAME } from "^/utils/constants";
import {} from "^/graphql/Auth";
import * as types from "^/graphql";

config();

const schema = makeSchema({
  types,
  outputs: {
    schema: join(process.cwd() + "/./schema.graphql"),
    typegen: join(process.cwd() + "/generated/nexus.ts"),
  },
});

export const db = new PrismaClient({ log: ["query"] });

const server = new ApolloServer({
  schema,
  context: ({ req, res }) => ({
    req,
    res,
    redis,
    db,
  }),
});

const redis = new Redis();
const redisStore = new RedisStore({
  client: redis,
  prefix: "discrude_redis_session_store:",
  disableTouch: true,
});

const app = express();
app.set("trust proxy", 1);
app.use(
  cors({
    origin: ["http://localhost:3000", "https://studio.apollographql.com"],
    credentials: true,
  })
);
app.use(
  session({
    name: COOKIE_NAME,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: redisStore,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60,
      secure: "auto",
    },
  })
);

async function Main() {
  await server.start();
  server.applyMiddleware({ app, cors: false });
}

try {
  Main();
} catch (error) {
  console.log(error);
}

app.listen(4000, () => {
  console.log(`listening of localhost:4000`);
});
