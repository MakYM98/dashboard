"use client"
import TabHeader from "../headers/tabHeader";
import LoanPie from "./components/loan_pie";
import LoanTable from "./components/loan_table";
import PaymentTable from "./components/payment_table";
import UpcomingCard from "./components/upcoming";
import data from './data.json'

const Liabilities = () => {
    return ( 
        <div className="h-full">
            <TabHeader title="Liabilities"/>
            <div className="mt-5 h-full w-full flex gap-2">
                <div className="w-[25%] h-full">
                    <div className="w-full h-[20%]">
                        <UpcomingCard/>
                    </div>
                    <div className="w-full h-[75%] mt-2 border-2 rounded-2xl">
                        <LoanPie/>
                        <div className="h-[20%] w-full p-2 grid grid-cols-2">
                            {
                                data['loan_pie'].map(item => (
                                    <>
                                        <div className="col-span-1">
                                            {item.name}
                                        </div>
                                        <div className="col-span-1">
                                            {item.amount}
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="w-[50%] h-full">
                    <LoanTable/>
                </div>
                <div className="w-[25%] h-full">
                    <PaymentTable/>
                </div>
            </div>
        </div>
    );
}
 
export default Liabilities;