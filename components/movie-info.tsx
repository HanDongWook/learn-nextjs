import { API_URL } from "../app/(home)/page";

async function fetchMovie(id: string) { 
    console.log(`fetchMovie: ${Date.now()}`);
    const res = await fetch(`${API_URL}/${id}`);
    return await res.json();
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await fetchMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>;
}