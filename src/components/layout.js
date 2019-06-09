import React from "react";
import PropTypes from "prop-types";
import Head from "./head";
import MobileNav from "./mobile-nav";
import Hero from "./hero";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <div className="flex flex-col h-screen">
        <header className="p-4 bg-black">
          <div className="container mx-auto flex justify-between items-center max-w-2xl">
            <div className="flex items-center">
              {/* <div className="text-3xl mr-2 p-3 rounded-full w-16 h-12 flex items-center av border-4 justify-center"> */}
              {/* <div className="text-3xl mr-">👨🏻‍💻</div> */}
              <h2 className="text-lg text-white">
                <Link to="/">Noah Blon</Link>
              </h2>
            </div>
            <MobileNav />
          </div>
        </header>
        <section>
          <Hero />
        </section>
        <main className="mt-8 mx-auto flex-grow max-w-2xl">{children}</main>
        <footer className="container mx-auto p-4 flex flex-col items-center">
          <div className="flex">
            <a
              href="https://www.github.com/noahblon"
              style={{ width: "40px" }}
              className="block p-2"
            >
              <svg viewBox="0 0 32 32">
                <path d="M0 18c0-6 3-8 3-9V3c3 0 6 2 7 3l6-1 6 1c1-1 4-3 7-3v6c0 1 3 3 3 9 0 7-2 12-16 12S0 25 0 18m3 2c0 4 1 8 13 8s13-4 13-8-1-6-13-6-13 2-13 6m5 1a2 3 0 0 0 5 0 2 3 0 0 0-5 0m16 0a2 3 0 0 0-5 0 2 3 0 0 0 5 0z" />
              </svg>
            </a>
            <a
              href="https://www.codepen.io/noahblon"
              style={{ width: "40px" }}
              className="block p-2"
            >
              <svg viewBox="0 0 32 32">
                <path
                  fill="transparent"
                  stroke="#000"
                  strokeWidth="3"
                  d="M16 2l14 9v10l-14 9-14-9V11l14-9zm0 0v10zm0 28V20zM2 11l14 9 14-9M2 21l14-9 14 9"
                />
              </svg>
            </a>
            <a
              href="https://www.twitter.com/noahblon"
              style={{ width: "40px" }}
              className="block p-2"
            >
              <svg viewBox="0 0 32 32">
                <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/noahblon/"
              className="block p-2"
              style={{ width: "40px" }}
            >
              <svg viewBox="0 0 24 24">
                <path d="M22 24H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2z" />
                <path fill="#fff" d="M3.5 9.5H7v11H3.5z" />
                <path fill="#fff" d="M13 9.5H9.5v11H13v-10z" />
                <circle cx="5.2" cy="5.2" r="2.2" fill="#fff" />
                <path
                  fill="#fff"
                  d="M13 10.5c.5-1 7.5-3.5 7.5 4H17c0-3.5-3.5-3-4-1 0-.5-.5-2 0-3z"
                />
                <path fill="#fff" d="M20.5 14.5H17v6h3.5V15z" />
              </svg>
            </a>
            {/* <div
            className="icon-fb relative p-2"
            aria-label="Fuck Facebook!"
            style={{ width: "40px" }}
          >
            <div className="p-2 icon-fb-no absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-2xl">
              <div>🚫</div>
            </div>
            <svg className="icon-fb-i" viewBox="0 0 32 32">
              <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z" />
            </svg>
          </div> */}
          </div>
          <blockquote className="italic">
            &ldquo;Enjoy every sandwich.&rdquo;
          </blockquote>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
