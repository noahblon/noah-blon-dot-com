import React from "react";
import Layout from "../components/layout";
import usePosts from "../hooks/use-posts";
import PostPreview from "../components/post-preview";

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>Noah Blon</h1>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};
