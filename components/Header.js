import Image from "next/image";
import Link from "next/link";
import {
  HomeIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
  FilmIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="h-16 bg-[#090b13] flex items-center px-9 overflow-hidden">
      <Link href="/">
        <a className="pt-3 min-w-max">
          <Image
            src="https://rb.gy/zzspjw"
            height={80}
            width={80}
            objectFit="contain"
          />
        </a>
      </Link>
      <div className="hidden md:flex ml-6 items-center">
        <a className="text-white flex items-center px-3 cursor-pointer group space-x-1">
          <HomeIcon className="h-5" />
          <span className="link">HOME</span>
        </a>
        <a className="text-white flex items-center px-3 cursor-pointer group space-x-1">
          <SearchIcon className="h-5" />
          <span className="link">SEARCH</span>
        </a>
        <a className="text-white flex items-center px-3 cursor-pointer group space-x-1">
          <PlusIcon className="h-6" />
          <span className="link">WATCHLIST</span>
        </a>
        <a className="text-white flex items-center px-3 cursor-pointer group space-x-1">
          <StarIcon className="h-5" />
          <span className="link">ORIGINALS</span>
        </a>
        <a className="text-white flex items-center px-3 cursor-pointer group space-x-1">
          <FilmIcon className="h-5" />
          <span className="link">MOVIES</span>
        </a>
        <a className="text-white flex items-center px-3 cursor-pointer group space-x-1">
          <PresentationChartLineIcon className="h-5" />
          <span className="link">SERIES</span>
        </a>
      </div>
      <img
        src="https://rb.gy/pgpk2z"
        alt=""
        className="w-12 h-12 rounded-full cursor-pointer ml-auto"
        loading="lazy"
      />
    </header>
  );
}

export default Header;
