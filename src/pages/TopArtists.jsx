import { ArtistCard, Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
    const { data, isFetching, error } = useGetTopChartsQuery();

    if (isFetching) return <Loader title="Loading Top Charts..." />;

    if (error) return <Error />;

    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
                Top Artists:
            </h2>

            <div className="flex flex-wrap sm:justify-start md:justify-center justify-center gap-7">
                {data?.map((track, i) => (
                    <ArtistCard i={i} key={track.key} track={track} />
                ))}
            </div>
        </div>
    );
};

export default TopArtists;
