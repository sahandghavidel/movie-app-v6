import requests from "../utils/requests";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex justify-center bg-gray-600 text-gray-200 py-8 text-lg sm:text-xl">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h2
          onClick={() => router.push(`?genre=${key}`)}
          className="cursor-pointer select-none mx-8 hover:text-white active:text-red-400 "
        >
          {title}
        </h2>
      ))}
    </nav>
  );
}
