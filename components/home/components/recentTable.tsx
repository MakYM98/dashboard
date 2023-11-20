"use client"
import data from '../data.json'

const RecentTable = () => {
    return ( 
        <div className='px-2 w-full overflow-hidden max-h-full'>
            <div className="px-1">
                <table className="max-h-full text-left w-full border-separate border-spacing-y-4">
                    <tbody>
                        {
                            data['activity_data'].map((item, i) => (
                                <tr>
                                    <td className={`${data['activity_data'][i+1]? 'border-b-2 border-slate-100':''} pb-2 text-[#2f335b]`}>
                                        <div>
                                            <p className='pb-2'>
                                                {item.name}
                                            </p>
                                            <p className='text-gray-400'>
                                                {item.date}
                                            </p>
                                        </div>
                                    </td>
                                    <td className={`${data['activity_data'][i+1]? 'border-b-2 border-slate-100':''} pb-2 text-[#2f335b]`}>
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

