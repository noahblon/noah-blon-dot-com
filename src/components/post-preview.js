import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const PostPreview = ({ post }) => {
  return (
    <article className="mb-8">
      <Link to={post.slug}>
        <h3 className="font-bold">{post.title}</h3>
      </Link>
      <p>{post.excerpt}</p>
      <Link to={post.slug}>Read this Post</Link>
    </article>
  );
};

PostPreview.propTypes = {
  post: PropTypes.object
};

export default PostPreview;
