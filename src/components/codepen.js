import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const CodepenEmbed = ({ slug, height }) => (
  <div
    className="codepen"
    data-height={height || 265}
    data-theme-id="light"
    data-default-tab="result"
    data-user="noahblon"
    data-slug-hash={slug}
  >
    <Helmet>
      <script async defer src="https://static.codepen.io/assets/embed/ei.js" />
    </Helmet>
    ufdah!
  </div>
);

CodepenEmbed.propTypes = {
  slug: PropTypes.string.isRequired,
  height: PropTypes.number
};

export default CodepenEmbed;
