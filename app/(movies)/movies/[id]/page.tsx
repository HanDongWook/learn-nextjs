import { Suspense } from "react";
import MovieInfo, { fetchMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

type PageProps = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params: { id } }: PageProps) {
    const movie = await fetchMovie(id);
    return {
        title: movie.title,
    }
}

export default async function MovieDetail({ params: { id } }: PageProps) {
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}