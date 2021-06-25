import Image from "next/image";
import { useRouter } from "next/router";

function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();

  return (
    <div
      className="rounded-xl overflow-hidden border-4 border-[#f9f9f9] border-opacity-10 shadow-image transform hover:scale-105 hover:border-opacity-80 hover:shadow-image-hover transition-all duration-250 ease-link-transition cursor-pointer"
      // onClick={
      //   result.media_type === "movie"
      //     ? () => router.push(`/movie/${result.id}`)
      //     : result.media_type === "tv"
      //     ? () => router.push(`/tv/${result.id}`)
      //     : ""
      // }
      onClick={
        result.media_type === "tv" || result.number_of_seasons
          ? () => router.push(`/tv/${result.id}`)
          : () => router.push(`/movie/${result.id}`)
      }
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        layout="responsive"
        height={1000}
        width={1920}
      />
    </div>
  );
}

export default Thumbnail;
