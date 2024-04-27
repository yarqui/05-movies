import PropTypes from "prop-types";

const Heading = ({ level, css, children, ...otherAttributes }) => {
  const safeLevel = level >= 1 && level <= 6 ? level : 2;
  const HeadingLevel = `h${safeLevel}`;

  const classes = `${css || ""}`;

  return (
    <HeadingLevel className={classes} {...otherAttributes}>
      {children}
    </HeadingLevel>
  );
};

Heading.propTypes = {
  level: PropTypes.number.isRequired,
  css: PropTypes.string,
  children: PropTypes.node,
};

export default Heading;
