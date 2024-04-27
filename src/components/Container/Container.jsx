import PropTypes from "prop-types";

const Container = ({ css, children }) => {
  const classes = ` ml-auto mr-auto max-w-screen-lg pl-5 pr-5 ${css || ""}`;

  return <div className={classes}>{children}</div>;
};

export default Container;

Container.propTypes = { children: PropTypes.node, css: PropTypes.string };
