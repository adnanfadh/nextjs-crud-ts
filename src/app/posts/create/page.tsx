import { createPost } from "@/app/actions/posts";
import PostForm from "@/components/post-form";

export default function PostCreate() {
  return (
    <main className="flex min-h-screen flex-col items-start p-24">
      <div className="mb-32 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {
          // Renders a PostForm component, passing the createPost action as the form action
          // and an initial data object with empty title and content.
        }
        <PostForm
          formAction={createPost}
          initialData={{ title: "", content: "" }}
        />
      </div>
    </main>
  );
}
