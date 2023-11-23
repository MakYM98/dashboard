"use client"
import data from '../data.json'

const AssetTable = () => {
    return ( 
        <div className='rounded-2xl px-2 h-full'>
            <div className="px-1">
                <table className="table-auto text-left w-full border-separate border-spacing-y-2">
                    <thead className=" text-gray-500">
                        <tr>
                            <th>Name</th>
                            <th>Shares / Avg</th>
                            <th>Total</th>
                            <th>Current Price</th>
                            <th>Daily Gain</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data['asset_table'].map((item, i) => (
                                <tr>
                                    <td className={`${data['asset_table'][i+1]? ' border-slate-100':''} pb-2 text-white`}>
                                        <div className=''>
                                            <p>
                                                {item.name}
                                            </p>
                                            <p>
                                                ({item.ticker})
                                            </p>
                                        </div>
                                    </td>
                                    <td className={`pb-2 text-white`}>{item.shares} / {item.DCA}</td>
                                    <td className={`pb-2 text-white`}>{item.Total}</td>
                                    <td className={`pb-2 text-white`}>{item['Current Price']}</td>
                                    <td className={`pb-2 ${item['Daily Gain'][0] == '-'? 'text-red-500':'text-green-500'}`}>
                                        {item['Daily Gain']}
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
 
export default AssetTable;

