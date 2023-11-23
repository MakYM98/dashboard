"use client"
import { BeakerIcon } from "@heroicons/react/20/solid"

interface ExpProps {
    name: string,
    budget: string,
    used: string,
    percentage:string
}

const ExpCard = ({name, budget, used, percentage} : ExpProps) => {
    return ( 
        <div className="w-full h-full bg-[#2f3033] rounded-2xl flex items-center px-2 py-2">
            <div className="w-full p-[5px] ml-2">
                <h5 className="xl:text-3xl text-xl text-white mb-2">
                    {name}
                </h5>
                <h5 className="xl:text-lg text-md text-gray-500 mb-2">
                    {used} / {budget}
                </h5>
                <div className="bg-[#1a1b1f] w-full h-[10px] rounded-2xl">
                    <div className={`bg-green-500 h-full rounded-2xl w-[${percentage}]`}></div>
                </div>
            </div>
        </div>
    );
}
 
export default ExpCard;