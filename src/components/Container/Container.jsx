const Container = ({ children }) => {
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: '1200px',
        paddingInline: '24px',
        boxSizing: 'border-box',
       }}
    >
      {children}
    </div>
  );
};

export default Container;
