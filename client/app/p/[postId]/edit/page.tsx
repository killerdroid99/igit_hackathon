"use client";

import { cn, swrSDK } from "@/utils";
import MDEditor from "@uiw/react-md-editor";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import rehypeSanitize from "rehype-sanitize";
import { mutate } from "swr";

export default function EditPost({ params }: { params: { postId: string } }) {
  const router = useRouter();

  const { UpdatePostMutation, usePostByIdQuery } = swrSDK;
  const { data } = usePostByIdQuery("postById-query", {
    postId: params.postId,
  });

  const [title, setTitle] = useState(data?.PostById?.data?.title || "");
  const [value, setValue] = useState<string>(
    data?.PostById?.data?.description || ""
  );

  async function handleSubmit() {
    const { UpdatePost } = await UpdatePostMutation({
      title,
      description: value,
      postId: params.postId,
    });

    mutate("postById-query", {
      postId: params.postId,
    });
    router.push(`/p/${params.postId}`);
  }

  return (
    <main className="flex flex-col items-center justify-between py-12 px-4 lg:px-[12dvw] xl:px-[18dvw]">
      <div className="w-full lg:max-w-[80%] space-y-4">
        <div className="gap-2 flex flex-col-reverse">
          {/* {responseErrors?.fields.includes("email") && (
						<span className="label-text-alt text-error">
							{responseErrors.msg}
						</span>
					)} */}
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Post title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            // onInput={() => setResponseErrors(null)}
            className={cn(
              "input input-bordered focus-visible:input-accent w-full peer",
              {
                // "input-error": responseErrors?.fields.includes("email"),
              }
            )}
          />
        </div>
        <div className="rounded-md overflow-hidden">
          <MDEditor
            value={value}
            onChange={setValue as any}
            previewOptions={{
              rehypePlugins: [[rehypeSanitize]],
            }}
            style={{ whiteSpace: "pre-wrap" }}
          />
        </div>
        <button className="float-right btn btn-accent" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </main>
  );
}
