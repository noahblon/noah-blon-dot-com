import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

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
  return (
    <div className="container">
      <Img fluid={image.sharp.fluid} className="mt-4" />
    </div>
  );
};

export default Avatar;
