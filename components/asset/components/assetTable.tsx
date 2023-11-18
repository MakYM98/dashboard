"use client"
import data from '../data.json'

const AssetTable = () => {
    return ( 
        <div className='border-2 rounded-2xl px-2 h-full'>
            <h1 className="text-xl pt-3 px-1">
                Assets Breakdown
            </h1>
            <div className="px-1">
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
                            data['asset_table'].map((item, i) => (
                                <tr>
                                    <td className={`${data['asset_table'][i+1]? 'border-b-2 border-slate-100':''} pb-2`}>{item.name}</td>
                                    <td className={`${data['asset_table'][i+1]? 'border-b-2 border-slate-100':''} pb-2`}>{item.ticker}</td>
                                    <td className={`${data['asset_table'][i+1]? 'border-b-2 border-slate-100':''} pb-2`}>{item.shares}</td>
                                    <td className={`${data['asset_table'][i+1]? 'border-b-2 border-slate-100':''} pb-2`}>{item.DCA}</td>
                                    <td className={`${data['asset_table'][i+1]? 'border-b-2 border-slate-100':''} pb-2`}>{item.Total}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default AssetTable;

