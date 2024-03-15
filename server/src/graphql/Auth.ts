import { objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.string("name");
    t.string("email");
    t.nullable.string("createdAt");
  },
});

export const AuthResponseData = objectType({
  name: "AuthResponseData",
  definition(t) {
    t.string("msg");
    t.list.string("fields");
    t.boolean("success");
  },
});

export const MeResponseData = objectType({
  name: "MeResponseData",
  definition(t) {
    t.id("id");
    t.string("name");
    t.string("email");
    t.string("msg");
  },
});
