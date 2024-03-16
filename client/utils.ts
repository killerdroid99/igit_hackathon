"use client";
import { GraphQLClient } from "graphql-request";
import { getSdkWithHooks } from "./sdk";
import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

const client = new GraphQLClient("http://localhost:4000/graphql", {
  credentials: "include",
});
export const swrSDK = getSdkWithHooks(client);

export function cn(...input: ClassValue[]) {
  return twMerge(clsx(input));
}
