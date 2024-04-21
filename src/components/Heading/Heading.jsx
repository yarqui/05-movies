const Heading = ({ level, caption, className, ...otherAttributes }) => {
  const safeLevel = level >= 1 && level <= 6 ? level : 2;
  const HeadingLevel = `h${safeLevel}`;

  const classes = `cursor-pointer hover:text-red-500 transition-colors ${
    className || ''
  }`;

  return (
    <HeadingLevel className={classes} {...otherAttributes}>
      {caption}
    </HeadingLevel>
  );
};

export default Heading;
