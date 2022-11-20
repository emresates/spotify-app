import React from 'react';
import { ArtistCard, Loader, Error } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading songs top charts" />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white mt-4 text-left mb-10">
        Top Artists
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-4">
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
