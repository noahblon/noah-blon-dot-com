import { graphql, useStaticQuery } from "gatsby";

export default function usePosts() {
  const query = graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            date
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
          excerpt
        }
      }
    }
  `;

  const data = useStaticQuery(query);
  return data.allMdx.nodes.map(post => {
    return {
      title: post.frontmatter.title,
      slug: post.frontmatter.slug,
      date: post.frontmatter.date,
      images: post.frontmatter.images,
      excerpt: post.excerpt
    };
  });
}
