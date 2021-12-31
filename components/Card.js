import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

export default function Card({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="p-3 select-none cursor-pointer hover:text-white active:text-red-400 xl:hover:scale-105 transition-transform duration-200">
      <Image
        src={BASE_URL + result.backdrop_path}
        width="200"
        height="100"
        layout="responsive"
      />
      <div className="p-2">
        <p className="truncate text-lg">{result.overview}</p>
        <h2 className="text-xl font-bold truncate my-1">
          {result.title ||
            result.name ||
            result.original_title ||
            result.original_name}
        </h2>
        <p className="flex items-center">
          {result.release_date || result.first_air_date}
          <ThumbUpIcon className="h-5 ml-4 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}
