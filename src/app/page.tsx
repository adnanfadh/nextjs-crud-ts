import PostDelete from "@/components/post-delete";
import { fetchPosts } from "@/db/queries/posts";
import Link from "next/link";

export default async function Home() {
  const posts = await fetchPosts();
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <main className="flex min-h-screen flex-col items-start p-24">
      <div className="mb-4">
        <Link href="/posts/create" className="rounded bg-white px-4 py-2">
          Create Post
        </Link>{" "}
        {
          // Link to create a new post.
        }
      </div>
      <div className="mb-32 grid gap-x-8 gap-y-4 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {posts.map((post) => {
          // Mapping over the posts and rendering each one.
          return (
            <div key={post.id}>
              <div className="mb-4">
                <Link
                  key={post.id}
                  href={`/posts/${post.id}/edit`}
                  className=""
                >
                  <h2 className={`mb-3 text-2xl font-semibold`}>
                    {post.title}
                  </h2>
                </Link>
                <p className={`m-0 max-w-[30ch] text-sm opacity-60`}>
                  {post.content}
                </p>
              </div>
              <div className="text-sm opacity-30">
                {"Updated at " +
                  post.updatedAt.toLocaleDateString("en-US", dateOptions)}
              </div>
              <PostDelete id={post.id} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
