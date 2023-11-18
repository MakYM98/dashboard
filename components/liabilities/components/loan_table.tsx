"use client"
import data from '../data.json'

const LoanTable = () => {
    return ( 
        <div className='h-full'>
            <div className="px-4 border-2 rounded-2xl h-full">
                <h1 className="text-xl pt-3 px-1">
                    Loans Breakdown
                </h1>
                <table className="table-auto text-left w-full border-separate border-spacing-y-4">
                    <thead className=" text-gray-300">
                        <tr>
                            <th>Loan</th>
                            <th>Total</th>
                            <th>Paid</th>
                            <th>Monthly</th>
                            <th>Upcoming</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data['loan_table'].map((item, i) => (
                                <tr>
                                    <td className={`${data['loan_table'][i+1]? 'border-b-2 border-slate-100':''} pb-2`}>{item.name}</td>
                                    <td className={`${data['loan_table'][i+1]? 'border-b-2 border-slate-100':''} pb-2`}>{item.total}</td>
                                    <td className={`${data['loan_table'][i+1]? 'border-b-2 border-slate-100':''} pb-2`}>{item.paid}</td>
                                    <td className={`${data['loan_table'][i+1]? 'border-b-2 border-slate-100':''} pb-2`}>{item.monthly}</td>
                                    <td className={`${data['loan_table'][i+1]? 'border-b-2 border-slate-100':''} pb-2`}>{item.upcoming}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default LoanTable;

