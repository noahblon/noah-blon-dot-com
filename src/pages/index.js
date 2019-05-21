import React from "react";
import Layout from "../components/layout";
import usePosts from "../hooks/use-posts";
import PostPreview from "../components/post-preview";

const IndexPage = () => {
  const posts = usePosts();
  return (
    <Layout>
      <h2 className="text-lg font-bold mb-4">Blog</h2>
      <div className="container mx-auto">
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;
