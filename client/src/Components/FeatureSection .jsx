import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlurCircle from "./BlurCircle";
import { dummyShowsData } from "../assets/assets";
import MoveCard from "./MoveCard";


const FeatureSection  = () => {
    const navigate = useNavigate()
    return (
        <div className="px-6 md:px-16 lg:px-44 overflow-hidden">
            <div className="relative flex items-center justify-between pt-20 pb-10">
                <p className="text-gray-300 font-medium text-lg">Now Showing</p>
                <BlurCircle top='0' right="-80px"/>

                <button className="flex items-center gap-3 cursor-pointer" onClick={()=>navigate('/movies')}>View All <ArrowRight className="group-hover:translate-x-0.5 transition w-4.5 h-4.5 cursor-pointer"/>
                </button>
            </div>
            <div className="flex  mx-sm:justify-center gap-3 mt-8">
                {
                    dummyShowsData.slice(0,6).map((show)=>(
                        <MoveCard key={show._id} movie={show}/>
                    ))
                }
            </div>
            <div className="flex justify-center mt-20">
                <button
                onClick={()=>{navigate('/movies'), scrollTo(0,0)}}
                 className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer">Show More</button>

            </div>
            
        </div>
    );
};

export default FeatureSection ;