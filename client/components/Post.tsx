import { Post } from "@/sdk";
import ArrowIcon from "./icons/ArrowIcon";
import { formatDistanceToNow } from "date-fns";
import CommentIcon from "./icons/CommentIcon";
import Link from "next/link";
// import Markdown from "react-markdown";
import MDEditor from "@uiw/react-md-editor";

function Post({ id, title, description, createdAt, updatedAt, author }: Post) {
  return (
    <Link
      href={`/p/${id}`}
      className="bg-base-200 rounded-lg border-base-content/20 hover:border-base-content/40 focus-visible:border-base-content/40 border-[1px] overflow-hidden outline-none"
    >
      <div className="flex gap-4 w-full md:w-[70dvw] min-w-[20rem] max-w-[50rem]">
        <div className="grid place-items-center w-fit cols max-h-20 py-4 pl-4 space-y-2">
          <ArrowIcon direction="UP" outline={true} className="text-lg" />
          <b className="text-xs">12</b>
          <ArrowIcon direction="DOWN" outline={true} className="text-lg" />
        </div>
        <div className="flex-1 bg-base-200 pr-4 py-4 pl-2 pt-3">
          <p className="text-[0.6rem] tracking-wider leading-6 text-base-content/60">
            Posted by u/{author?.name}{" "}
            {formatDistanceToNow(createdAt, {
              addSuffix: true,
            })}
          </p>
          <h3 className="md:text-lg font-semibold my-2">{title}</h3>
          {/* <Markdown>{description}</Markdown> */}
          <div className="flex items-center gap-2 text-base-content/80 mt-3">
            <CommentIcon />
            <p className="text-xs tracking-wide leading-tight">12 comments</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Post;
