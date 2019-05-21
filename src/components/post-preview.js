import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const PostPreview = ({ post }) => {
  return (
    <article>
      <Link to={post.slug}>
        <h3>{post.title}</h3>
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
