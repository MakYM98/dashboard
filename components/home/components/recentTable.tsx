"use client"
import data from '../data.json'
import { FaFilm, FaMoneyBillWave } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";

const RecentTable = () => {
    return ( 
        <div className='px-2 w-full overflow-hidden max-h-full'>
            <div className="px-1">
                <table className="max-h-full text-left w-full border-separate border-spacing-y-4">
                    <tbody>
                        {
                            data['activity_data'].map((item, i) => (
                                <tr key={i}>
                                    <td className={`pb-2 w-[15%]`}>
                                        <div>
                                            <p className=' text-white'>
                                                {
                                                    item.category == 'Entertainment'?
                                                        <FaFilm className="w-[80%] md:w-[70%] lg:w-[60%] xl:w-[40%] h-full"/>
                                                    :
                                                    item.category == 'Income'?
                                                        <FaMoneyBillWave className="w-[80%] md:w-[70%] lg:w-[60%] xl:w-[40%] h-full"/>
                                                    :
                                                    item.category == 'Food'?
                                                        <IoFastFoodSharp className="w-[80%] md:w-[80%] lg:w-[60%] xl:w-[40%] h-full"/>
                                                    :
                                                        <></>
                                                }
                                            </p>
                                        </div>
                                    </td>
                                    <td className={`pb-2`}>
                                        <div>
                                            <p className='pb-2 text-white'>
                                                {item.name}
                                            </p>
                                            <p className='text-gray-400'>
                                                {item.date}
                                            </p>
                                        </div>
                                    </td>
                                    <td className={` pb-2 text-[#2f335b]`}>
                                        <div>
                                            <p className={`pb-2 text-end ${item.amount[0] == '-'? 'text-red-500':'text-green-500'}`}>
                                                {item.amount}
                                            </p>
                                            <p className='text-gray-400 text-end'>
                                                {item.category}
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default RecentTable;

