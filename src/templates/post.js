import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-mdx";
import Layout from "../components/layout";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <MDXRenderer>{post.code.body}</MDXRenderer>
  </Layout>
);

export default PostTemplate;
