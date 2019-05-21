import React, { useRef } from "react";
import Layout from "../components/layout";
import serialize from "form-serialize";
import axios from "axios";

const ContactPage = () => {
  const form = useRef(null);

  const handleSubmit = async ev => {
    ev.preventDefault();
    try {
      const serializedFormData = serialize(form.current);
      const action = form.current.action;
      await axios.post(action, serializedFormData);
      alert("done!");
    } catch (e) {
      alert("fail!");
    }
  };

  return (
    <Layout>
      <h2 className="text-lg font-bold mb-4">Contact Me</h2>
      <form
        name="contact"
        ref={form}
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit">Send</button>
      </form>
    </Layout>
  );
};

export default ContactPage;