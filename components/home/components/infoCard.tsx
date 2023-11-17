"use client"
import { BeakerIcon } from "@heroicons/react/20/solid"

interface InfoProps {
    title: string,
    value: number,

}

const InfoCard = ({title, value} : InfoProps) => {
    return ( 
        <div className="w-full h-full bg-white rounded-2xl flex items-center border-2 px-5 py-4">
            {/* Card Icon */}
            {
                title == 'Assets'?
                <BeakerIcon className="w-[75px] bg-black text-white rounded-full p-2"/>
                :
                <BeakerIcon className="w-[75px] bg-black text-white rounded-full p-2"/>
            }
            <div className="w-full p-[5px] ml-2">
                <h5 className="text-xl">
                    {value}
                </h5>
                <h5 className="text-sm">
                    {title}
                </h5>
            </div>
        </div>
    );
}
 
export default InfoCard;