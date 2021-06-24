import Image from "next/image";

function Tv({ series }) {
  console.log(series);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <h2>{series.title || series.original_name}</h2>
      <Image
        src={
          `${BASE_URL}${series.backdrop_path || series.poster_path}` ||
          `${BASE_URL}${series.poster_path}`
        }
        layout="responsive"
        height={1000}
        width={1920}
      />
    </div>
  );
}

export default Tv;

export async function getServerSideProps(context) {
  const id = context.query.id;

  const request = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}&language=en-US`
  ).then((response) => response.json());

  return {
    props: {
      series: request,
    },
  };
}
