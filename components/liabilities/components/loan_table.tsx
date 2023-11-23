"use client"
import data from '../data.json'

const LoanTable = () => {
    return ( 
        <div className='h-full'>
            <div className="px-4 rounded-2xl h-full">
                <h1 className="text-xl pt-3 px-1 text-white">
                    Loans Breakdown
                </h1>
                <table className="table-auto text-left w-full border-separate border-spacing-y-4">
                    <thead className=" text-gray-500">
                        <tr>
                            <th>Loan</th>
                            <th>Total</th>
                            <th>Paid</th>
                            <th>Monthly</th>
                            <th>Upcoming</th>
                            <th>Last Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data['loan_table'].map((item, i) => (
                                <tr>
                                    <td className={`text-white pb-2`}>{item.name}</td>
                                    <td className={`text-white pb-2`}>{item.total}</td>
                                    <td className={`text-white pb-2`}>{item.paid}</td>
                                    <td className={`text-white pb-2`}>{item.monthly}</td>
                                    <td className={`text-white pb-2`}>{item.upcoming}</td>
                                    <td className={`text-white pb-2`}>{item.last_paid}</td>
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

