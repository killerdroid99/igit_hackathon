"use client";
import { swrSDK } from "@/utils";
import MDEditor from "@uiw/react-md-editor";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export default function PostPage({ params }: { params: { postId: string } }) {
  const { usePostByIdQuery, useMeQuery, DeletePostMutation } = swrSDK;
  const { data: authData } = useMeQuery("me-query");
  const router = useRouter();
  const { data } = usePostByIdQuery("postById-query", {
    postId: params.postId,
  });

  async function deletePost() {
    const reply = window.confirm("Are you sure you want to delete this post?");
    if (reply) {
      const { DeletePost } = await DeletePostMutation({
        postId: params.postId,
      });
      router.push("/");
    }
  }
  return (
    <main>
      <Suspense fallback={<p className="animate-pulse">Loading Post...</p>}>
        <article className="flex flex-col gap-8 py-16 px-4 lg:px-[16dvw] xl:px-[18dvw]">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">
                by u/{data?.PostById?.data?.author?.name}
              </p>
              <p className="text-sm">
                Posted on {data?.PostById?.data?.createdAt}
              </p>
            </div>
            {authData?.Me?.id === data?.PostById?.data?.authorId && (
              <div className="space-x-3">
                <Link
                  href={`/p/${params.postId}/edit`}
                  className="btn btn-warning btn-outline btn-sm"
                >
                  Edit
                </Link>
                <button
                  onClick={deletePost}
                  className="btn btn-error btn-outline btn-sm"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
          <h1 className="text-6xl font-bold max-w-[32rem]">
            {data?.PostById?.data?.title}
          </h1>
          <MDEditor.Markdown
            source={data?.PostById?.data?.description as string}
            style={{
              lineHeight: "2rem",
              backgroundColor: "inherit",
            }}
          />
        </article>
      </Suspense>
    </main>
  );
}
