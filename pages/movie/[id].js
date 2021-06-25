import Image from "next/image";

function Movie({ movie }) {
  console.log(movie);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <h2>{movie.title || movie.original_name}</h2>
      <Image
        src={
          `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
          `${BASE_URL}${movie.poster_path}`
        }
        layout="responsive"
        height={1000}
        width={1920}
      />
    </div>
  );
}

export default Movie;

export async function getServerSideProps(context) {
  const id = context.query.id;

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  ).then((response) => response.json());

  return {
    props: {
      movie: request,
    },
  };
}
