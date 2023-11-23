"use client"
import data from '../data.json'
import { FaCar } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { CgGym } from "react-icons/cg";

const LoanPieTable = () => {
    return ( 
        <div className='h-[40%] w-full mt-1 px-10'>
            <div className="px-4 rounded-2xl">
                <table className="table-auto text-left w-full border-separate border-spacing-y-2">
                    <thead className=" text-gray-500">
                        <tr>
                            <th>Status</th>
                            <th className='text-end'>Amount</th>
                            <th className='text-end'>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={`pb-2 text-white`}>Paid</td>
                            <td className={`pb-2 text-white text-end`}>$10,000</td>
                            <td className={`pb-2 text-white text-end`}>10%</td>
                        </tr>
                        <tr>
                            <td className={`pb-2 text-white`}>Left</td>
                            <td className={`pb-2 text-white text-end`}>$100,000</td>
                            <td className={`pb-2 text-white text-end`}>90%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default LoanPieTable;

