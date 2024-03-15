import { objectType } from "nexus";

export const Author = objectType({
  name: "Author",
  definition(t) {
    t.string("name");
  },
});

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.id("id");
    t.string("title");
    t.nullable.string("description");
    t.date("createdAt");
    t.date("updatedAt");
    t.string("authorId");
    t.field("author", {
      type: Author,
    });
  },
});

export const AllPostsResponseData = objectType({
  name: "AllPostsResponseData",
  definition(t) {
    t.list.field("data", {
      type: Post,
    });
    t.string("msg");
  },
});

export const CreatePostResponseData = objectType({
  name: "CreatePostResponseData",
  definition(t) {
    t.nullable.field("data", {
      type: Post,
    });
    t.string("msg");
  },
});
