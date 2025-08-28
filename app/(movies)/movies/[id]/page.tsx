import { Suspense } from "react";
import MovieInfo, { fetchMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

type MoviePageProps = PageProps<'/movies/[id]'>;

export async function generateMetadata(props: MoviePageProps) {
    const { id } = await props.params
    const movie = await fetchMovie(id);
    return {
        title: movie.title,
    };
}

export default async function MovieDetail(props: MoviePageProps) {
    const { id } = await props.params
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