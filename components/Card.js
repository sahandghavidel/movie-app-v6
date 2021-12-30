import Image from "next/image";

export default function Card({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <Image
        src={BASE_URL + result.backdrop_path}
        width="200"
        height="100"
        layout="responsive"
      />
      <h1>{result.id}</h1>
    </div>
  );
}
