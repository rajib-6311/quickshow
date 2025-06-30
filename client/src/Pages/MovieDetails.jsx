import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyDateTimeData, dummyShowsData } from "../assets/assets";
import BlurCircle from "../Components/BlurCircle";
import { StarIcon } from "lucide-react";
import timeFormat from "../Lib/timeFormat";

const MovieDetails = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        const foundShow = dummyShowsData.find(show => show._id === id);
        if (foundShow) {
            setShow({
                movie: foundShow,
                dateTime: dummyDateTimeData
            });
        }
    }, [id]);

    if (!show) {
        return <div>Loading...</div>;
    }

    return (
        <div className="px-6 md:px-16 lg:px-40 pt-30 md:pt-50">
            <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
                <img
                    className="max-md:mx-auto rounded-xl h-104 max-w-70 object-cover"
                    src={show.movie.poster_path}
                    alt={show.movie.title}
                />
                <div className="relative flex flex-col gap-3">
                    <BlurCircle top="-100px" left="-100px" />
                    <p className="text-primary">ENGLISH</p>
                    <h1 className="text-4xl font-semibold max-w-96 text-balance">
                        {show.movie.title}
                    </h1>
                    <div className="flex items-center gap-2 text-gray-300">
                        <StarIcon className="w-5 h-5 text-primary fill-primary" />
                        {show.movie.vote_average.toFixed(1)} User Rating
                    </div>
                    <p className="text-gray-400 mt-2 text-sm leading-tight max-w-xl">
                        {show.movie.overview}
                    </p>
                    <p>
                        {timeFormat(show.movie.runtime)} &middot;{" "}
                        {show.movie.genres.map(genre => genre.name).join(", ")} &middot;{" "}
                        {show.movie.release_date?.split("_")[0]}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
