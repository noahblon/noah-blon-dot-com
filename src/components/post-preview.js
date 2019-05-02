import React from "react";
import { Link } from "gatsby";

export default function PostPreview({ post }) {
  return (
    <article>
      <Link to={post.slug}>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.excerpt}</p>
      <Link to={post.slug}>Read this Post</Link>
    </article>
  );
}
