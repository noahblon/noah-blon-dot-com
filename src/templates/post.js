import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-mdx";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "../components/code-block";
import Layout from "../components/layout";
import Img from "gatsby-image";
import PropTypes from "prop-types";

const PreConverter = props => <div {...props} />;

const components = {
  pre: PreConverter,
  code: CodeBlock
};

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        images {
          publicURL
          childImageSharp {
            fluid {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
              presentationWidth
              presentationHeight
            }
          }
        }
      }
      code {
        body
      }
    }
  }
`;

function buildImageVm(frontmatterImages) {
  const images = {};
  if (frontmatterImages) {
    frontmatterImages.forEach((image, i) => {
      const { publicURL } = image;
      const { childImageSharp } = image;
      const GatsbyImage = () => <Img fluid={childImageSharp.fluid} />;
      const nativeImage = () => <img src={publicURL} />;
      if (childImageSharp !== null) {
        images[`image${i}`] = GatsbyImage;
      } else {
        images[`image${i}`] = nativeImage;
      }
    });
  }
  return images;
}

const PostTemplate = ({ data: { mdx: post } }) => {
  const images = buildImageVm(post.frontmatter.images);
  return (
    <MDXProvider components={components}>
      <Layout>
        <h1>{post.frontmatter.title}</h1>
        <MDXRenderer images={images}>{post.code.body}</MDXRenderer>
      </Layout>
    </MDXProvider>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object
};

export default PostTemplate;
