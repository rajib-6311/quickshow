import { useEffect, useState } from "react";
import { dummyBookingData } from "../assets/assets";
import Loading from "../Components/Loading";
import BlurCircle from "../Components/BlurCircle";
import isoTimeFormat from "../Lib/isoTimeFormat";
import timeFormat from "../Lib/timeFormat";
import { dateFormat } from "../Lib/dateFormat";

const MyBookings = () => {
    const currency = import.meta.env.VITE_CURRENCY

    const [bookings, setBookings] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getMyBookings = async () => {
        setBookings(dummyBookingData)
        setIsLoading(false)
    }

    useEffect(() => {
        getMyBookings()
    }, [])

    return !isLoading ? (
        <div className="relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]">

            <BlurCircle top="100px" left="100px" />
            <div>
                <BlurCircle bottom="0px" left="600px" />
            </div>
            <h1 className="text-lg text-semibold mb-4">My Bookings</h1>

            {bookings.map((item,index)=>(
            <div key={index} className='flex flex-col md: flex-row justify-between bg-primary/8 border border-primary/20 rounded-1g mt-4 p-2 max-w-3x1'>
                <div className='flex flex-col md: flex-row'>
                    <img src={item.show.movie.poster_path} alt="" className='md:max-w-45 aspect-video h-auto object-cover object-bottom rounded' />
                    <div className='flex flex-col p-4'>
                        <p className='text-lg font-semibold'>{item.show.movie.title}</p>
                        <p className="text-lg font-semibold">{timeFormat(item.show.movie.runtime)}</p>
                        <p className="text-gray-400 text-sm mt-auto">{dateFormat(item.show.showDateTime)}</p>
                    </div>
                </div>
            </div>

            ))}

        </div>
    ) : <Loading />
};

export default MyBookings;