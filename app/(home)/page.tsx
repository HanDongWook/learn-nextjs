import Link from "next/link";
import { useEffect, useState } from "react";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export const metadata = {
  title: "Home",
}

async function getMovies() {
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  console.log(movies);
  return <div>{
    movies.map(movie => <li><Link href={`movies/${movie.id}`}>{movie.title}</Link></li>)}
  </div>;
}