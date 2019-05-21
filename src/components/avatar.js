import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Avatar = () => {
  const query = graphql`
    query {
      image: file(relativePath: { eq: "avatar.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `;
  const { image } = useStaticQuery(query);
  return <img src={image.sharp.fluid.src} width="200" className="mt-4" />;
};

export default Avatar;
