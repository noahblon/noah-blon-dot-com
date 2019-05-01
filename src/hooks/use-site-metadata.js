import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const query = graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `;
  const data = useStaticQuery(query);
  return data.site.siteMetadata;
};

export default useSiteMetadata;
