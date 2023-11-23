"use client"
import TabHeader from "../headers/tabHeader";
import LoanPieTable from "./components/loanPieTable";
import LoanPie from "./components/loan_pie";
import LoanTable from "./components/loan_table";
import UpcomingCard from "./components/upcoming";
import data from './data.json'

const Liabilities = () => {
    return ( 
        <div className="h-full flex flex-col">
            <TabHeader title="Liabilities"/>
            <div className="mt-5 h-full w-full flex gap-2">
                <div className="w-[50%] h-full">
                    <div className="w-full h-[20%]">
                        <UpcomingCard/>
                    </div>
                    <div className="h-[78%] w-[100%] pt-5 mt-2 rounded-2xl flex flex-col justify-start bg-[#2f3033] items-start">
                        <h1 className="text-xl px-3 text-white w-full pb-2 pl-4 font-bold">
                            Expenses Breakdown
                        </h1>
                        <LoanPie/>
                        <LoanPieTable/>
                    </div>
                </div>
                <div className="w-[50%] h-full">
                    <LoanTable/>
                </div>
            </div>
        </div>
    );
}
 
export default Liabilities;