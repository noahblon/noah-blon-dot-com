import React from "react";
import PropTypes from "prop-types";
import Highlight, { defaultProps } from "prism-react-renderer";

const CodeBlock = ({ children, className }) => {
  const language = className
    ? className.replace(/language-/, "")
    : "javascript";

  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          <code>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
};

CodeBlock.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default CodeBlock;
