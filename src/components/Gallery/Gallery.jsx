const Gallery = ({ movies }) => {
  return (
    <ul style={styles.list}>
      {movies.map(
        ({ id, title, original_title, name, original_name, poster_path }) => {
          return (
            <li key={id} style={styles.item}>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title ?? name ?? original_title ?? original_name}
                style={styles.image}
              />

              <p style={styles.title}>
                {title ?? name ?? original_title ?? original_name}
              </p>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default Gallery;

const styles = {
  list: {
    display: 'grid',
    maxWidth: 'calc(100vw - 48px)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 0.8fr))',
    gridGap: '20px',
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    listStyle: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};
