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
      excerpt: post.excerpt
    };
  });
}
