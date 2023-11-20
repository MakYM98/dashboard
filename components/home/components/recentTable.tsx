"use client"
import data from '../data.json'

const RecentTable = () => {
    return ( 
        <div className='px-2 w-full'>
            <h1 className="text-xl px-1 text-[#2f335b]">
                Recent Activity
            </h1>
            <div className="px-1">
                <table className="table-auto text-left w-full border-separate border-spacing-y-4">
                    <thead className=" text-gray-300">
                        <tr>
                            <th>Expense</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data['activity_data'].map((item, i) => (
                                <tr>
                                    <td className={`${data['activity_data'][i+1]? 'border-b-2 border-slate-100':''} pb-2 text-[#2f335b]`}>
                                        {item.name}
                                    </td>
                                    <td className={`${data['activity_data'][i+1]? 'border-b-2 border-slate-100':''} pb-2 text-[#2f335b]`}>{item.amount}</td>
                                    <td className={`${data['activity_data'][i+1]? 'border-b-2 border-slate-100':''} pb-2 text-[#2f335b]`}>{item.date}</td>
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

