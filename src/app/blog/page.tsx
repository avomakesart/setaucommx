import { BlogHero } from "~/components/pages/blog/blog-hero";
import { PostList } from "~/components/pages/blog/post-list";

export default function BlogPage() {
  const isDisabled = true
  return (
    <div>
      {isDisabled ? (
        <div className="text-6xl py-24 mx-auto flex justify-center">Proximamente</div>
      ) : (
        <>
          {" "}
          <BlogHero
            title="Blog y articulos"
            featuredPost={{
              title: "Building resilience in business",
              category: "News",
              extract:
                "Our Finance Insights Blog is dedicated to bringing you the latest news, expert advice, and actionable strategies to help you navigate the complexities of personal and business finance.",
              imageUrl:
                "https://images.unsplash.com/photo-1501901609772-df0848060b33?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              imageAltText: "Featured blog post image",
              link: "/blog/featured-post",
              linkLabel: "Read more",
            }}
          />
          <PostList />{" "}
        </>
      )}
    </div>
  );
}
