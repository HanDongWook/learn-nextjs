import { Suspense } from "react";
import MovieInfo, { fetchMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
    params: { id: string };
}

export async function generateMetadata({ params }: IParams) {
    const movie = await fetchMovie(params.id);
    return {
        title: movie.title,
    }
}

export default async function MovieDetail({ params }: IParams) {
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={params.id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={params.id} />
            </Suspense>
        </div>
    );
}