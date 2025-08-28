import Moive from "../../components/moive";
import styles from "../../styles/home.module.css";

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
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Moive
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}