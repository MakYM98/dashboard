"use client"
import data from '../data.json'

const PaymentTable = () => {
    return ( 
        <div className='h-full'>
            <div className="px-4 border-2 rounded-2xl h-full">
                <h1 className="text-xl pt-3 px-1">
                    Payment Activity
                </h1>
                <table className="table-auto text-left w-full border-separate border-spacing-y-4">
                    <thead className=" text-gray-300">
                        <tr>
                            <th>Date</th>
                            <th>Loan</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data['payment_table'].map((item, i) => (
                                <tr>
                                    <td className={`${data['payment_table'][i+1]? 'border-b-2 border-slate-100':''} pb-2`}>{item.date}</td>
                                    <td className={`${data['payment_table'][i+1]? 'border-b-2 border-slate-100':''} pb-2`}>{item.loan}</td>
                                    <td className={`${data['payment_table'][i+1]? 'border-b-2 border-slate-100':''} pb-2`}>{item.amount}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default PaymentTable;

