"use client"
import data from '../data.json'
import { FaCar } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { CgGym } from "react-icons/cg";

const ExpPieTable = () => {
    return ( 
        <div className='h-[60%] w-full mt-5'>
            <div className="px-4 rounded-2xl">
                <table className="table-auto text-left w-full border-separate border-spacing-y-4">
                    <thead className=" text-gray-500">
                        <tr>
                            <th></th>
                            <th>Type</th>
                            <th className='text-end'>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={`pb-2 text-white`}>
                                <FaCar size={30}/>
                            </td>
                            <td className={`pb-2 text-white`}>Transport</td>
                            <td className={`pb-2 text-white text-end`}>10%</td>
                        </tr>
                        <tr>
                            <td className={`pb-2 text-white`}>
                                <CgGym size={30}/>
                            </td>
                            <td className={`pb-2 text-white`}>Hobbies</td>
                            <td className={`pb-2 text-white text-end`}>30%</td>
                        </tr>
                        <tr>
                            <td className={`pb-2 text-white`}>
                                <MdFastfood size={30}/>
                            </td>
                            <td className={`pb-2 text-white`}>Food</td>
                            <td className={`pb-2 text-white text-end`}>60%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default ExpPieTable;

