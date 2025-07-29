import {Comic_Relief} from "next/font/google";

const comic = Comic_Relief({
    subsets: ["latin"],
    weight: "400",
});

export default function OldHeader() {
    return(
        <div className='relative md:w-full md:min-h-[36rem] min-h-96 max-h-96 lg:min-h-0 lg:max-h-screen lg:h-screen'>
            <div className="min-h-96 max-h-96 md:min-h-[36rem] lg:min-h-0 lg:max-h-screen lg:h-screen   flex items-center justify-center">
                <h1 className="text-white text-9xl lg:text-12xl font-bold">S</h1>
            </div>
            <div className={`${comic.className}`}>
                <p className="absolute text-white top-20 md:top-40 lg:top-[40%] left-20 md:left-1/3 lg:left-[40%] text-4xl rotate-24 font-comic">
                    #IT
                </p>

                <p className="absolute text-white top-72 md:top-[65%] lg:top-[60%] left-60 md:left-[60%] lg:left-[55%] text-4xl rotate-24 font-comic">
                    New?
                </p>
                <div className="hidden lg:block absolute top-1/2 left-1/4 text-white  rotate-24 font-comic">
                    <p className="text-white text-4xl ">#Frontend</p>
                </div>
                <div className="hidden lg:block absolute top-[40%] left-[60%] text-white  rotate-24 font-comic">
                    <p className="text-white text-4xl ">#Sycroll Arts</p>
                </div>
            </div>


        </div>
    )
}