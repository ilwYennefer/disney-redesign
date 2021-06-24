import Image from "next/image";
import Thumbnail from "./Thumbnail";
import { useRouter } from "next/router";
import requests from "../utils/requests";

function PopularResults({ popularResults }) {
  const router = useRouter();

  Object.entries(requests.fetchPopular.url).map(([key, { tv, movies }]) => {
    return;
  });

  return (
    <div>
      <div className="flex items-center space-x-4 mb-5">
        <h4 className="text-white text-lg font-medium">What's Popular</h4>
        {Object.entries(requests.fetchPopular.url).map(
          ([key, { title, url }]) => (
            <button
              className="text-white"
              onClick={() => router.push(`/?type=${key}`)}
            >
              {title}
            </button>
          )
        )}
      </div>
      <div className="grid gap-6 grid-cols-4">
        {popularResults.map((result) => (
          <Thumbnail key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}

export default PopularResults;
