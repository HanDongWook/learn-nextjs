import { Suspense } from "react";
import MovieInfo, { fetchMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Metadata } from "next";

type PageProps = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const movie = await fetchMovie(params.id);
    return {
        title: movie.title,
    };
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