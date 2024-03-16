"use client";
import { swrSDK } from "@/utils";
import Post from "./Post";

function PostList() {
  const { useAllPostsQuery } = swrSDK;
  const { data } = useAllPostsQuery("allPosts-query");

  return (
    <div className="flex flex-col gap-5 items-center justify-center py-16 px-4 lg:px-[16dvw] xl:px-[18dvw]">
      {data?.AllPosts?.data?.map((post) => (
        <Post {...post} key={post?.id} />
      ))}
    </div>
  );
}

export default PostList;
