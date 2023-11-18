"use client"
import data from '../data.json'

const ExpTable = () => {
    return ( 
        <div className='h-full'>
            <h1 className="text-xl pt-3 px-1">
                Assets Breakdown
            </h1>
            <div className="px-4 border-2 rounded-2xl">
                <table className="table-auto text-left w-full border-separate border-spacing-y-4">
                    <thead className=" text-gray-300">
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
                                <tr>
                                    <td className={`${data['exp_table'][i+1]? 'border-b-2 border-slate-100':''} pb-2`}>{item.name}</td>
                                    <td className={`${data['exp_table'][i+1]? 'border-b-2 border-slate-100':''} pb-2`}>{item.Budget}</td>
                                    <td className={`${data['exp_table'][i+1]? 'border-b-2 border-slate-100':''} pb-2`}>{item.Date}</td>
                                    <td className={`${data['exp_table'][i+1]? 'border-b-2 border-slate-100':''} pb-2`}>{item.Amount}</td>
                                    <td className={`${data['exp_table'][i+1]? 'border-b-2 border-slate-100':''} pb-2`}>{item.Status}</td>
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

