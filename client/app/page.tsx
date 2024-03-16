import PostList from "@/components/PostList";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense>
        <PostList />
      </Suspense>
    </main>
  );
}
