"use client";

import { cn, swrSDK } from "@/utils";
import MDEditor from "@uiw/react-md-editor";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import rehypeSanitize from "rehype-sanitize";
import { mutate } from "swr";

export default function AddPost() {
  const router = useRouter();
  const [value, setValue] = useState<string>();
  const titleRef = useRef<HTMLInputElement>(null);

  const { CreatePostMutation } = swrSDK;

  async function handleSubmit() {
    const { CreatePost } = await CreatePostMutation({
      title: titleRef.current?.value as string,
      description: value,
    });

    mutate("allPosts-query");
    router.push("/");
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
            ref={titleRef}
            placeholder="Post title"
            autoComplete="on"
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
