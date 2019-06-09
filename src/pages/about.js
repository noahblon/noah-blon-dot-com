import React from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const AboutPage = () => {
  const query = graphql`
    query {
      image: file(relativePath: { eq: "internet.png" }) {
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
    <Layout>
      <div className="container">
        <h2 className="text-lg font-bold mb-4">Hi! I’m Noah</h2>
        <Img
          fluid={image.sharp.fluid}
          className="float-right w-48 h-auto m-4 mt-0"
        />
        <p>
          I’m a frontend developer. I made my first website in 1998 and thought
          it was the coolest thing ever. Still do.
        </p>
        <p>
          The last few years I’ve been working at The Nerdery for lots of
          different clients like Google and Sports Illustrated. For the last 4
          years I’ve been working with one client - Petfinder.com - and it has
          been fantastic.{" "}
        </p>
        <p>
          I went to Michigan State University (Go Green!) and majored in
          technical writing. The skills I learned l help me every day.{" "}
        </p>
        <p>
          In my free time, I like to read, brew beer, and play Nintendo. I love
          the outdoors, and have been backpacking all over the world.{" "}
        </p>
        <p>I live in Minnesota with my partner Sarah. We enjoy each other. </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
