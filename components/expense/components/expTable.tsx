"use client"
import data from '../data.json'

const ExpTable = () => {
    return ( 
        <div className='h-full'>
            <div className="px-2 rounded-2xl">
                <table className="table-auto text-left w-full border-separate border-spacing-y-5">
                    <thead className=" text-gray-500">
                        <tr>
                            <th>Name</th>
                            <th>Ticker</th>
                            <th>Shares</th>
                            <th>Average</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data['exp_table'].map((item, i) => (
                                <tr key={i}>
                                    <td className={`text-white pb-2`}>{item.name}</td>
                                    <td className={`text-white pb-2`}>{item.Budget}</td>
                                    <td className={`text-white pb-2`}>{item.Date}</td>
                                    <td className={`text-white pb-2`}>{item.Amount}</td>
                                    <td className={`pb-2 ${item.Status == 'Declined'? 'text-red-500':item.Status=='Approved'?'text-green-500': 'text-yellow-300'}`}>
                                        {item.Status}
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
 
export default ExpTable;

