"use client"
import { BeakerIcon } from "@heroicons/react/20/solid"

interface ExpProps {
    name: string,
    budget: number,
    used:number
}

const ExpCard = ({name, budget, used} : ExpProps) => {
    return ( 
        <div className="w-full h-full bg-white rounded-2xl flex items-center border-2 px-5 py-4">
            <div>

            </div>
            <div className="w-full p-[5px] ml-2">
                <h5 className="text-xl">
                    {name}
                </h5>
                <h5 className="text-sm">
                    {budget}
                </h5>
            </div>
        </div>
    );
}
 
export default ExpCard;