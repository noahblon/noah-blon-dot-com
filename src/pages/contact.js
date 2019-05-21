import React, { useRef } from "react";
import Layout from "../components/layout";
import serialize from "form-serialize";
import axios from "axios";
import { navigate } from "gatsby-link";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const ContactPage = () => {
  const query = graphql`
    query {
      image: file(relativePath: { eq: "mailbox.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `;
  const { image } = useStaticQuery(query);

  const form = useRef(null);

  const handleSubmit = async ev => {
    ev.preventDefault();
    try {
      const serializedFormData = serialize(form.current);
      const action = form.current.getAttribute("action");
      await axios.post(action, serializedFormData);
      navigate(action);
    } catch (e) {
      // TODO: fix
      alert("fail!");
    }
  };

  // TODO: netlify honeypot.  o bother.
  return (
    <Layout>
      <h2 className="text-lg font-bold mb-4">Contact Me</h2>
      <div className="flex">
        <div className="container">
          <Img fluid={image.sharp.fluid} className="mt-4" />
        </div>
        <div className="container">
          <form
            name="contact"
            action="/thanks/"
            ref={form}
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block" htmlFor="name">
                Name
              </label>
              <input
                className="border-2 border-solid border-black"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div>
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                className="border-2 border-solid border-black"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div>
              <label className="block" htmlFor="message">
                Message
              </label>
              <textarea
                className="border-2 border-solid border-black"
                id="message"
                name="message"
                required
              />
            </div>
            <input type="hidden" name="form-name" value="contact" />
            <button
              className="border-2 border-solid border-black p-2"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
