import { cn } from "@/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  direction: "UP" | "DOWN";
  outline: Boolean;
}

function ArrowIcon({ direction, className, outline }: Props) {
  return (
    <div className={className}>
      {direction === "UP" &&
        (outline ? (
          // up outline
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M21.047 22.013c.654-.685.94-1.768.473-2.816l-7.363-16.51a2.338 2.338 0 0 0-4.315 0L2.48 19.197a2.546 2.546 0 0 0 .473 2.816c.659.69 1.735 1.009 2.767.458l-.353-.662l.353.662l5.904-3.152l-.354-.662l.354.662a.789.789 0 0 1 .752 0l5.904 3.152l.353-.662l-.353.662c1.032.55 2.108.232 2.767-.458m-2.06-.866l-.351.657zl-5.904-3.152a2.289 2.289 0 0 0-2.165 0l-5.903 3.152c-.356.19-.715.103-.976-.171a1.046 1.046 0 0 1-.188-1.169l7.362-16.51c.326-.73 1.25-.73 1.575 0l7.363 16.51c.2.448.08.889-.188 1.169c-.262.274-.62.36-.976.17"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : (
          // up filled
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m3.165 19.503l7.362-16.51c.59-1.324 2.355-1.324 2.946 0l7.362 16.51c.667 1.495-.814 3.047-2.202 2.306l-5.904-3.152c-.459-.245-1-.245-1.458 0l-5.904 3.152c-1.388.74-2.87-.81-2.202-2.306"
            ></path>
          </svg>
        ))}
      {direction === "DOWN" &&
        (outline ? (
          // down outline
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M21.047 1.987c.654.685.94 1.768.473 2.816l-7.363 16.51a2.338 2.338 0 0 1-4.315 0L2.48 4.802a2.546 2.546 0 0 1 .473-2.816c.659-.69 1.735-1.009 2.767-.458l-.353.662l.353-.662l5.904 3.152l-.354.662l.354-.662a.789.789 0 0 0 .752 0l5.904-3.15l.353.662l-.353-.662c1.032-.55 2.108-.232 2.767.458m-2.06.865l-.351-.656zl-5.904 3.153a2.289 2.289 0 0 1-2.165 0L5.014 2.852c-.356-.19-.715-.103-.976.171c-.268.28-.388.72-.188 1.169l7.362 16.51c.326.73 1.25.73 1.575 0l7.363-16.51c.2-.448.08-.889-.188-1.169c-.262-.274-.62-.36-.976-.17"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : (
          // down filled
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m3.165 19.503l7.362-16.51c.59-1.324 2.355-1.324 2.946 0l7.362 16.51c.667 1.495-.814 3.047-2.202 2.306l-5.904-3.152c-.459-.245-1-.245-1.458 0l-5.904 3.152c-1.388.74-2.87-.81-2.202-2.306"
            ></path>
          </svg>
        ))}
    </div>
  );
}

export default ArrowIcon;
